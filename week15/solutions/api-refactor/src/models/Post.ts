import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: { type: String, required: [true, 'title is required'] },
  content: { type: String, required: [true, 'content is required'] },
});

export default model('Post', postSchema);
