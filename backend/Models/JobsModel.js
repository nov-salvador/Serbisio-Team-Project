import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    
  },
  postedBy: {
    type: String,
    
  },
  category: {
    type: String,
    
  },
  budgetPerHour: {
    type: Number,
    
  },
  duration: {
    type: Number,
    
  },
  postedDate: {
    type: Date,
    
  },
  status: {
    type: String,
    
  },
  closedDate: {
    type: Date,
    default: null
  },
  description: {
    type: String,
    
  },
  photoUrl: {
    type: String,
    
  },
  location: {
    type: String,
    
  }
});

const JobsModel = mongoose.model('Jobs', jobsSchema);

export default JobsModel;
