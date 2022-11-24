import React, { useState } from 'react';



export default function SettingsButton(){

    const [clr, setClr] = useState(false); 
   const clickState = () =>{
              setClr(clr => !clr)
    }
    return(
<button onClick={()=> clickState()} style={{ backgroundColor: clr ? 'grey' : '',}} class="ui circular icon button">
  <i class="icon settings"></i>
</button>
)            
};




