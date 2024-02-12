import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  group: {
    type: String,
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
}, {timestamps: true});

const CategoryModel = mongoose.model('categories', categorySchema);

export default CategoryModel;
