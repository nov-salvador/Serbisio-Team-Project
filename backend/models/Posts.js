import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
  userId:{
    type: String,
    required: true,
  },
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: Number,
  postPicture: String,
  location: String,
  category: String,
  review: String,
  ratings: Number
}, {timestamps: true})