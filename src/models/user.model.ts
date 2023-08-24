import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', UserSchema);
