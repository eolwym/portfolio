import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
  title: {type: String, required: true, unique: true},
  date: {type: String, required: true},
  description: {type: String, required:true},
  url_img: {type: String, required: true},
  technologies: { type: [Schema.Types.ObjectId], ref: 'technology' },
  githubLink: {type: String, required: false}
});

export const Achievement = mongoose.model('achievement', achievementSchema);