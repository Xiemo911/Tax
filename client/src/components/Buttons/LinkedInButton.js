import React, { useState } from 'react';



export default function LinkedInButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'purple' : '',}} class="ui circular linkedin icon button">
  <i class="linkedin icon"></i>
</button>


)        
      
};