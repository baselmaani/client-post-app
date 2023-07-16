import { useUserPost } from '../hooks/useUserPosts';

const UserPost = () => {
  const { data } = useUserPost();

  return (
    <div>
      {data?.map((post) => (
        <>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </>
      ))}
    </div>
  );
};

export default UserPost;
