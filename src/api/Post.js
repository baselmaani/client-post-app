import axiosInstance from './config/axiosInstance';

class Post {
  static async getAllPost() {
    const result = await axiosInstance('get', 'post').then((res) => res.data);
    return result;
  }
  static async createPost(data) {
    const res = await axiosInstance('post', '/post', data).then(
      (res) => res.data
    );
    return res;
  }
  static async getUserPost() {
    const result = await axiosInstance('get', '/post/userspost').then(
      (res) => res.data
    );
    return result;
  }
}
export default Post;
