import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import "./MovieDetails.css";
//  import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = ({match,details}) => {
    const detail=details.find(el=>el.id==match.params.id)
  return <div> 
     {/* <h5 style={{color:'white'}}> i'm heres</h5>  */}
     <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img   src={detail.image}  alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title"> {detail.name}</h1>
        <div style={{marginLeft:"35px"}} >
        <StarRating  rating={detail.rating} />
        </div>
        <p class="card-text" ><small >{detail.date}</small></p>
        <Link to="/" ><button style={{marginLeft:"35px"}}>Back</button></Link>
      </div>
    </div>
  </div>
</div>
  </div>;
};

export default MovieDetails;
