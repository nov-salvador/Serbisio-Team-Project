import JobsModel from "../models/Jobs.js";
import User from "../models/User.js";

export async function createJob(req, res) {
  try{
    const userId = req.params;
    const {
    jobTitle, 
    category,
    location,
    duration,
    budgetPerHour,
    description,
    photoUrl, 
    }= req.body
    const user = await User.findById(userId.userId);
    const {firstname, lastname} = user
    const capitalizedFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    const capitalizedLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
    const fullname = `${capitalizedFirstname} ${capitalizedLastname}`;
    const newJob = new JobsModel({
      postedBy: fullname,
      jobTitle,
      category,
      location,
      duration,
      budgetPerHour,
      description,
      photoUrl,
    })
    const savedJob = await newJob.save()
    res.status(201).json({message: "Job Creation Successful", savedJob})
  }catch(err){
    res.status(500).json({error: err.message})
  }
  
}