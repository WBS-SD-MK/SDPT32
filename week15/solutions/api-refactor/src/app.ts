import '#db';
import express, { type Request } from 'express';
import { Post } from '#models';
import { isValidObjectId } from 'mongoose';

const app = express();
const port = 3000;
app.use(express.json());

type PostType = {
  title: string;
  content: string;
};

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});
app.post('/posts', async (req: Request<{}, {}, PostType>, res) => {
  if (!req.body) return res.status(400).json({ error: 'Title and Content are required' });
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and Content are required' });
  const post = await Post.create({ title, content });
  res.status(201).json(post);
});
app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  if (!isValidObjectId(postId)) return res.status(400).json({ error: 'Invalid Post ID' });
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: 'Post Not Found' });
  res.json(post);
});
app.put('/posts/:id', async (req: Request<{ id: string }, {}, PostType>, res) => {
  const postId = req.params.id;
  if (!isValidObjectId(postId)) return res.status(400).json({ error: 'Invalid Post ID' });
  if (!req.body) return res.status(400).json({ error: 'You have to update at least one property' });
  const { title, content } = req.body;
  if (!title && !content) return res.status(400).json({ error: 'Title or Content is required' });
  const post = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
  if (!post) return res.status(404).json({ error: 'Post Not Found' });
  res.json(post);
});
app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  if (!isValidObjectId(postId)) return res.status(400).json({ error: 'Invalid Post ID' });
  const post = await Post.findByIdAndDelete(postId);
  if (!post) return res.status(404).json({ error: 'Post Not Found' });
  res.json({ message: 'Post Deleted' });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
