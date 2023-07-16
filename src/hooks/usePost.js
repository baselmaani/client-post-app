import { useQuery } from 'react-query';
import Post from '../api/Post';
export const usePost = () => {
  return useQuery('post', Post.getAllPost);
};
