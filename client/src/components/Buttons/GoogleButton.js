import React, { useState } from 'react';



export default function GoogleButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'red' : '',}} class="ui circular google icon button">
  <i class="google icon"></i>
</button>
)            
};