import React, { useEffect, useState } from 'react';
import { usePost } from '../hooks/usePost';
import { useAddPost } from '../hooks/useAddPost';

import { Link, Navigate } from 'react-router-dom';
import { useStateValue } from '../providers/stateContext';

const Home = () => {
  const [{ user }] = useStateValue();
  const { data, isLoading } = usePost();

  const { mutate } = useAddPost();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = (e) => {
    e.preventDefault();
    mutate({
      title,
      content,
      images: 'img2',
    });
  };
  if (isLoading) return <h2>loading....</h2>;

  return (
    <>
      {user === null && <Navigate to={'/login'} replace={true} />}
      {data?.map((post, i) => (
        <>
          <span key={i}>{i}-</span>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </>
      ))}
      <input placeholder='title' onChange={(e) => setTitle(e.target.value)} />
      <input
        placeholder='content'
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleAddPost}>Add Post</button>
      <Link to={'/post/userspost'}>
        <button>show my posts</button>
      </Link>
    </>
  );
};

export default Home;
