import React, { useState } from 'react';



export default function FacebookButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'purple' : '',}} class="ui circular facebook icon button">
  <i class="facebook icon"></i>
</button>


)        
      
};

