import { Document } from 'mongoose';

export interface IUserLocal {
  email: string;
  password: string;
}

export interface IUser extends Document {
  username: string;
  local: IUserLocal;
  comparePassword: (
    password: string,
    hashedPassword: string
  ) => Promise<boolean>;
}

export interface UserForm {
  username: string;
  email: string;
  password: string;
}
