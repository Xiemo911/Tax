import React, { useState } from 'react';



export default function SettingsButton(props){

    const [clr, setClr] = useState(false); 
    const[srch, setSrch] = useState("")
   const clickState = () =>{
              setClr(clr => !clr)
    }
    console.log(props)
    return(
<div class="ui icon input">
  <input onChange={(e) => props.changeSearch(e.target.value)} type="text" placeholder="Search..."/>
  <i class="search icon"></i>
</div>)
            
};




