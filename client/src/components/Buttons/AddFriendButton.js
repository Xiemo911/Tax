import React, { useState } from 'react';



export default function AddFriendButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
        <button onClick={()=> clickState()} class="ui basic button">{clr? "Request sent":"Add Friend"}</button>)
     
};

