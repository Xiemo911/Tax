import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register(props){
  const navigate = useNavigate();

  const clickHandle = async(e) => {
    e.preventDefault();
    
    axios.post('/api/register', {
			username: e.target.elements.username.value,
      password: e.target.elements.password.value
		})
			.then(response => {
				console.log(response)
				if (!response.data.msg) {
          navigate("/Login")
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}




    return(
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            Register
          </div>
        </h2>
        <form onSubmit={clickHandle} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="username" placeholder="username" required/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" required/>
              </div>
            </div>
            <button type="submit" value="register" href="" className="ui fluid large teal submit button">Register</button>
          </div>
    
          <div className="ui error message"></div>
    
        </form>
    
        <div className="ui message">
          Have an account? <a href="/Login">Log in</a>
        </div>
      </div>
    </div>
    )
    }