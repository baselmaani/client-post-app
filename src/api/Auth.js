import axiosInstance from './config/axiosInstance';

class Auth {
  static async login({ email, password }) {
    const result = await axiosInstance('post', 'auth/signin', {
      email,
      password,
    }).then((res) => res.data);

    return result;
  }
  static async signup({ email, password, name, age }) {
    const result = await axiosInstance('post', 'auth/signup', {
      name,
      email,
      age,
      password,
    }).then((res) => res.data);
    return result;
  }
}

export default Auth;
