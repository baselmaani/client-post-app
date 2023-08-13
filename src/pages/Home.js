import React, { useEffect, useState } from 'react';
import { usePost } from '../hooks/usePost';
import { useAddPost } from '../hooks/useAddPost';

import { Link, Navigate } from 'react-router-dom';
import { useStateValue } from '../providers/stateContext';
import Header from '../components/Header';

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
    <div>
      <Header />
      <input
        className='input'
        placeholder='title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows={4}
        cols={50}
        multiple
        className='input'
        placeholder='content'
        onChange={(e) => setContent(e.target.value)}
      />

      <button className='btn ' onClick={handleAddPost}>
        Add Post
      </button>
      <Link to={'/post/userspost'}>
        <button className='btn  '>show my posts</button>
      </Link>
      <div className=' w-full rounded-2xl m-20 p-6'>
        {user === null && <Navigate to={'/login'} replace={true} />}
        {data?.map((post, i) => (
          <div className='bg-blue-100 rounded-2xl m-4 relative' key={i}>
            <p className='font-bold text-2xl mb-4 border-b-2 border-gray-100 '>
              {post.title}
            </p>
            <p>{post.content}</p>
            <p className=' absolute bottom-0 right-0 p-2 text-gray-400'>
              By {user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
