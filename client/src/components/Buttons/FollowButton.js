import React, { useState } from 'react';



export default function FollowButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
        
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'red' : '',}} class="ui button">{clr? "Unfollow":"Follow"}</button>)
};
