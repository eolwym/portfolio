import mongoose, { Model } from 'mongoose';

const Schema = mongoose.Schema;

const technologySchema = new Schema({
  title: {type: String, required: true, unique: true},
  url_img: {type: String, required:true},
});

export const Technology = mongoose.model('technology', technologySchema);