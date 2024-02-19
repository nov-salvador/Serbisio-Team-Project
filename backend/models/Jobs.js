import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  budgetPerHour: {
    type: Number,
    min: 0,
  },
  duration: {
    type: Number,
    min: 1,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['open', 'closed'], 
    default: 'open',
  },
  closedDate: {
    type: Date,
    default: null,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  photoUrl: {
    type: String,
    validate: {
      validator: (value) => {
        return /^https?:\/\/\S+$/.test(value);
      },
      message: props => `${props.value} is not a valid URL!`,
    },
  },
  location: {
    type: String,
  },
  completedBy: {
    type: String,
    default: null,
  },
},{timestamps: true});

const JobsModel = mongoose.model('jobs', jobsSchema);

export default JobsModel;
