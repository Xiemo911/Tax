import React, { useState } from 'react';



export default function BlueButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
       
        <button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'blue' : '',}} class="ui user circular outline icon button">
  <i class="user icon"></i></button>)
};





















































/*
export default function Butto() {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {

      setIsActive(current => !current);

    };
  
    return (
        <button onClick={()=> handleClick()} style={{ backgroundColor: isActive ? 'blue' : '',}}
         class="ui user circular outline icon button">
        <i class="user icon"></i>
      </button>
      );
  }*/




