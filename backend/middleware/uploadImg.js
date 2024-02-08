import cloudinary from "./cloudinary.js"

export async function uploadImg(req, res){
  try{
    const result = await cloudinary.uploader.upload(req.file.path, {folder: "User Picture"})
    res.status(200).json({url: result.secure_url})
  }catch(err){
    res.status(500).json({message: err.message})
    console.log(err.message)
    console.log(err)
  }
}