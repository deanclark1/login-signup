import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const [firstName, setfirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [msg, setMsg] = useState(""),
    history = useHistory();

  function handlefirstName(e) {
    setfirstName(e.target.value);
  }

  function handleLastName(e){
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleMsg() {
    return msg;
  }

  const onSignUp = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      let thisUser = { firstName,lastName, email, password };
      let saveUser = JSON.stringify(thisUser);
      localStorage.setItem('users', saveUser);
      console.log(localStorage.getItem('users'));
      setMsg("Successfully Signed up..You will be redirected to login page");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } else {
      setMsg("Invalid input");
    }
  };

  return(
    <div className="SignUpPage">
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 ">
                  <h2 className="text-center">Sign Up</h2>
                  <form className="pt-3">
                    <div className="form-row">
                      <div className="form-group col-md-6 pr-lg-2">
                        <label >First Name:</label>
                        <input className="form-control mb-2"
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={handlefirstName}
                            required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label >Last Name:</label>
                        <input 
                          className="form-control mb-2"
                          type="text"
                          value={lastName}
                          placeholder="Last Name"
                          onChange={handleLastName}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label >Email:</label>
                        <input 
                          className="form-control mb-2"
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={handleEmail}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 pr-lg-2">
                        <label >Password:</label>
                        <input
                          className="form-control mb-2"
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={handlePassword}
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-1">
                      <button className="btn btn-dark signup-submit mb-2" onClick={onSignUp}>Sign Up</button>
                      {msg ? <span  className="">{handleMsg()}</span> : null}
                    </div>
                    
                    <div  className="">
                       Already have an account? <Link to="/login">Login here</Link>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;