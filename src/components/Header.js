import React, { useState } from 'react';
import { useStateValue } from '../providers/stateContext';
import { usePost } from '../hooks/usePost';
import { BiSearchAlt } from 'react-icons/bi';
const Header = () => {
  const [{ user }] = useStateValue();
  const [search, setSearch] = useState('');
  const { data, isLoading } = usePost();

  const items = data?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(items);
  return (
    <div className='flex flex-1 h-20 justify-around items-center mt-0 bg-gray-100 w-full'>
      <div className='flex items-center gap-4 '>
        <img
          src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/132904242/original/6141d9c91c378763a53f663c2562ec79dc7e8902/do-your-avtar-in-low-cost.jpg'
          className='w-14 h-14 rounded-full'
          alt='avtar'
        />
        <h4 className='font-bold text-6  font-serif'>{user.name}</h4>
      </div>
      <div className='relative'>
        <div className='flex justify-center items-center bg-white rounded-xl p-1'>
          <BiSearchAlt className=' ml-2   text-gray-300 ' />

          <input
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='search'
            className=' p-2 focus:outline-none rounded-2xl w-96 felx justify-center items-center placeholder:translate-x-1/2'
          />
        </div>
        <div className=' absolute right-1/2 left-1/2'>
          {search &&
            items?.map((item, i) => (
              <div className='bg-blue-100 rounded-2xl' key={i}>
                <p className='font-bold text-2xl mt-0 border-b-2 border-gray-100 '>
                  {item.title}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <ul className='flex justify-center items-center gap-6 list-none'>
          <li>most recent</li>
          <li>most popular</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
