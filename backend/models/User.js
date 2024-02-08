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
    type: Map,
    of: Number
  },
  isWorker: Boolean
    
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;