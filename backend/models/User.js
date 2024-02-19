import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  companyName: {
    type: String,
    required: true
  }
});

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
    default: ''
  },
  userPicture: {
    public_id: {
      type: String
    },
    url: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/5987/5987424.png"
    },
  },
  coverPicture: {
    type: String,
    default: ''
  },
  experiences: [ExperienceSchema],
  ratings: {
    communication: {
      type: Number,
      default: 0
    },
    punctuality: {
      type: Number,
      default: 0
    },
    qualityOfWork: {
      type: Number,
      default: 0
    }
  },
  isEmployer: {
    type: Boolean,
    default: false
  },
  createdJobs: {
    type: Number,
    default: 0
  },
  completedJobs: {
    type: Number,
    default: 0
  },
  ratePerHour: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;
