import React from 'react';
import { Link } from 'react-router-dom';
import EditMovie from './EditMovie';
import StarRating from './StarRating';


const MovieCard = (props) => {
  return <div className='oneCard'>


    <div className='container'>
    {/* <div  className='choice'>
  
  <PlayCircleOutlineIcon> </PlayCircleOutlineIcon>
  <SettingsSuggestIcon></SettingsSuggestIcon>
      
     
    </div> */}
  <img src={props.item.image} alt="" />
  </div>
      <div className='movieCard'> 
      <h2>{props.item.name}</h2>
      <StarRating  rating={props.item.rating}/>
      <h4>{props.item.date}</h4>
      <button onClick={()=>props.delete(props.item.id)}>Delete</button>
      <Link to={`/MovieDetails/${props.item.id}`}> <button style={{marginLeft:'20px'}}> See details </button> </Link>
      <EditMovie modify={props.item} edited={props.edited}/>
      </div>
  </div>;
};

export default MovieCard;
