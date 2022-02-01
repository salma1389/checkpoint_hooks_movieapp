import React from 'react';

const StarRating = ({rating,handelRating}) => {
    const stars=(rating)=>{
        var tab=[];
        for(let i=1;i<=5;i++)
        {
            i<=rating? tab.push(<span onClick={()=>handelRating(i)} style={{color:"gold",cursor:'pointer'}} >★ </span>)  : tab.push(<span onClick={()=>handelRating(i)} style={{color:"gold",cursor:'pointer'}} >☆ </span>)
        }
        return tab;
    }
  return <div>
      {stars(rating)}
   
  </div>;
};

StarRating.defaultProps={
    handelRating:()=>{}
}

export default StarRating;
