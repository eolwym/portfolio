import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  title: {type: String, required: true, unique: true},
  date: {type: Number, required: true},
  location: {type: String, required:true},
  description: {type: String, required: true},
  following: { type: [Schema.Types.ObjectId], ref: 'technology' }

});

export const Technology = mongoose.model('technology', experienceSchema);