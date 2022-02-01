import React from 'react';
import StarRating from './StarRating';

const Search = ({text,handelChange,handelRate,rate}) => {
  return <div className='search'>
      <div >
      <input type="text" value={text} placeholder='add the movie title'  onChange={(e)=>handelChange(e.target.value)} />
      <StarRating handelRating={handelRate} rating={rate}/>
      </div>
  </div>;
};

export default Search;
