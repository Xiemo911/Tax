import React, { useState } from 'react';



export default function TwitterButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'blue' : '',}} class="ui circular twitter icon button">
  <i class="twitter icon"></i>
</button>


)        
      
};