import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies,del,rating,edited}) => {
  return <div className='movieList'>
   
      {
 React.Children.toArray(movies.map((movie)=><MovieCard item={movie}  delete={del} edited={edited}/>))
      }
     
  </div>;
};

export default MovieList;
