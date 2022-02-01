import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies,del,rating,edited}) => {
  return <div className='movieList'>
   
      {
movies.map((movie,i)=><MovieCard item={movie} key={i} delete={del} edited={edited}/>)
      }
     
  </div>;
};

export default MovieList;
