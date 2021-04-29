import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';
import { IUser } from '../../database/interfaces/user.interface';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }
});

userSchema.statics.hashPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

interface IUserModel extends Model<IUser> {
  hashPassword: (password: string) => string;
}

export const User = mongoose.model<IUser, IUserModel>('user', userSchema);
