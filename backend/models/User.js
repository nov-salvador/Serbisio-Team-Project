import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  username:{
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  phoneNumber: {
    type: Number,
    required: true,
    min: 6,
  },
  services: {
    type: Array,
    default: []
  },
  userLocation: {
    type: String,
    required: true,
  },
  userPicture: {
    public_id: String,
    url: String
  },
  coverPicture: {},
  ratings: {
    communication: Number,
    punctuality: Number,
    qualityOfWork: Number,
  },
  isEmployer: {
    type: Boolean,
    default: false
  },
  createdJobs: Number,
  completedJobs: Number,
  ratePerHour: Number,

}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;