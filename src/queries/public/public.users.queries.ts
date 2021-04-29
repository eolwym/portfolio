import { User } from '../../database/models/user.model';

export const findUserPerEmail = (email: string) => {
    return User.findOne({ 'local.email': email }).exec();
};
  
export const findUserPerId = (id: string) => {
    return User.findById(id).exec();
};