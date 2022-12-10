import React from "react"
import states from "../components/utils/states.json";
import marital from "../components/utils/marital.json"
import axios from "axios";





export default function Start(props){

  const handleFormSubmit = async (e) => {
    e.preventDefault();
 
    const a = await axios
      .post(`/api/submittax`, { state: e.target.elements.state.value, status: e.target.elements.status.value, income: e.target.elements.income.value })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
 


  };



return(
<div style={{textAlign: "center"}}>
<div style={{width: "100%", backgroundColor:"grey", minHeight:"5rem", maxHeight: "5rem"}}>


{/* //NAV */}



</div>


<form onSubmit={handleFormSubmit} style={{}}>
<div style={{marginTop:"3rem"}}>
  <div>
<select name="state" style={{margin: "auto", width: "15rem",marginBottom: "2rem"}}  className="ui dropdown" >
{states.map((i ,ind) => {
return <option key={ind} value={i.abbreviation} >{i.name}</option>
})}
</select>
</div>

<div>
<select name="status" style={{margin: "auto", width: "15rem",marginBottom: "2rem"}} className="ui dropdown">
{marital.map((i, ind)=>{
  return <option key={`a${ind}`} value={i.abbreviation} >{i.status}</option>
})}
</select>
</div>

<div>
<div style={{margin: "auto", width: "15rem",marginBottom: "2rem"}} className="ui input action">
  <input name="income" type="text" required placeholder="Annual Taxable Income"/>
</div>
</div>

<div>
<button style={{width: "15rem"}} type="submit" className="ui button">Submit</button>
</div>
</div>
</form>
<hr/>
</div>



)
}