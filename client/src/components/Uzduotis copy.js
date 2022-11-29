import React from "react";
import AddFriendButton from "./Buttons/AddFriendButton";
import BlueButton from "./Buttons/BlueButton";
import FacebookButton from "./Buttons/FacebookButton";
import FollowButton from "./Buttons/FollowButton";
import GoogleButton from "./Buttons/GoogleButton";
import LikeButton from "./Buttons/LikeButton";
import LinkedInButton from "./Buttons/LinkedInButton";
import SettingsButton from "./Buttons/SettingsButton";
import TwitterButton from "./Buttons/TwitterButton";
import SearchButton from "./Buttons/SearchButton"
class Uzduotis extends React.Component{
state = {search: ""}

sr = (prop) =>{
   this.setState({
    search: prop 

   })
}



    render(){

        return(
            <div>
                    <div style={{display: "flex" ,margin: "auto"}}>
<div style={{display: "flex" ,margin: "auto"}}>
<BlueButton/>
<FollowButton/>
<AddFriendButton/>
<LikeButton/>
</div>
<div style={{display: "flex" ,margin: "auto"}}>   
    <SearchButton changeSearch={this.sr}/>
     </div>
<div style={{display: "flex" ,margin: "auto"}}>
<FacebookButton/>
<TwitterButton/>
<LinkedInButton/>
<GoogleButton/>
<SettingsButton/>
</div>




                
            </div>
            <hr></hr>
            <div style={{display: "flex"}}>

            <div style={{margin: "auto", backgroundColor: "blue", width: "100%"}}>d</div>
            <div style={{margin: "auto", backgroundColor: "red", width: "100%"}}>d</div>
            <div style={{margin: "auto", backgroundColor: "green", width: "100%"}}>d</div>
            </div>
   
            
            </div>
        )
        
    }
    




    

    


}


export default Uzduotis









