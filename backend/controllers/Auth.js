import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import cloudinary from '../middleware/cloudinary.js';

//Register a User
export async function registerUser(req, res){
  try{
    const {
      firstname, 
      lastname, 
      password, 
      email, 
      phoneNumber, 
      services, 
      userLocation,  
    } = req.body

    // const result = await cloudinary.uploader.upload(req.file.path,)

    const salt = await bcrypt.genSalt();

    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname, 
      lastname, 
      email,
      password: passwordHash, 
      phoneNumber, 
      services, 
      userLocation,
  
    })

    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  }catch(err){
    res.status(500).json({message: err.message})
  }
};


//Log in a User
export async function loginUser(req, res){
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email : email});
    if(!user){
      return res.status(404).json({message: "invalid credential"})
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({message: "invalid credential"})
    }

    delete user.password;
    
    res.status(200).json({user, message: "Successful login"})
  }catch(err){
    res.status(500).json({message: err.message})
  }
}