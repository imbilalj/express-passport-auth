import { Schema, model, Document, InferSchemaType } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema(
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

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRounds = 10;

    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export type User = InferSchemaType<typeof UserSchema> & Document;

export const UserModel = model<User>('User', UserSchema);
