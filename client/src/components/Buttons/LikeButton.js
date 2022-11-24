import React, { useState } from 'react';



export default function LikeButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(

      <span>
      <span onClick={()=> clickState()} style={{ color: clr? "white":"" ,backgroundColor: clr ? 'red' : '',}} class="ui button">
      <i style={{color: clr ? 'white' : '',}} class="heart icon"></i>Like</span>
      <a class="ui basic label">{clr? "153":"152"}</a>
      </span>
        )
};
