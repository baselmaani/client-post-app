import { useQuery } from 'react-query';

import Post from '../api/Post';

export const useUserPost = () => {
  return useQuery('userPost', Post.getUserPost);
};
