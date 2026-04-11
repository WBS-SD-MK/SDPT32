import type { RequestHandler } from 'express';
import { isValidObjectId, type Types } from 'mongoose';
import type { z } from 'zod';
import type { postSchema } from '#schemas';
import { Post } from '#models';

type PostInputDTO = z.infer<typeof postSchema>;
type PostDTO = Omit<PostInputDTO, 'author'> & {
  author: InstanceType<typeof Types.ObjectId>;
  _id: InstanceType<typeof Types.ObjectId>;
  updatedAt: Date;
  createdAt: Date;
  __v: number;
};

type IdParams = { id: string };

export const getAllPosts: RequestHandler<{}, PostDTO[]> = async (_req, res) => {
  const posts = await Post.find().lean();
  res.json(posts);
};

export const createPost: RequestHandler<{}, PostDTO, PostInputDTO> = async (req, res) => {
  const newPost = await Post.create(req.body satisfies PostInputDTO);
  res.status(201).json(newPost);
};

export const getSinglePost: RequestHandler<IdParams, PostDTO> = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: { status: 400 } });
  const post = await Post.findById(id).lean();
  if (!post) throw new Error(`Post with id of ${id} doesn't exist`, { cause: { status: 404 } });
  res.send(post);
};

export const updatePost: RequestHandler<IdParams, PostDTO> = async (req, res) => {
  const {
    body: { title, content, image },
    post
  } = req;

  if (!post) throw new Error(`Post not found`, { cause: { status: 404 } });

  post.title = title;
  post.content = content;
  post.image = image;

  await post.save();

  res.json(post);
};

export const deletePost: RequestHandler<IdParams, { message: string }> = async (req, res) => {
  const {
    params: { id },
    post
  } = req;
  if (!post) throw new Error(`Post not found`, { cause: { status: 404 } });

  await Post.findByIdAndDelete(id);

  res.json({ message: `Post with id of ${id} was deleted` });
};
