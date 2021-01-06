import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);
