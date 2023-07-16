import { useMutation } from 'react-query';
import Post from '../api/Post';

export const useAddPost = (data) => {
  return useMutation(Post.createPost, data);
};
