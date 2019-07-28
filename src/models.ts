import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const PostSchema = new Schema({
  title: String,
  content: String,
});

export const User = model('User', UserSchema);
export const Post = model('Post', PostSchema);
