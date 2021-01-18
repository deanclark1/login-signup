import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [alert, setAlert] = useState(""),
    history = useHistory();

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleLoginClick(e) {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users"));
        if( password === users.password && email === users.email){
        history.push("/");

        }else{
        setAlert("Wrong email or password");
        }
    }
    return(
        <div className="loginPage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Log In</h2>
                        <form className="pt-3">
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <label >Email address:</label>
                                    <input 
                                        className="form-control mb-2"
                                        type="text"
                                        placeholder="email"
                                        value={email}
                                        onChange={ handleEmail }
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label >Password:</label>
                                    <input 
                                        className="form-control mb-2"
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <button className="btn btn-dark login-submit" type="submit" onClick={handleLoginClick} >
                                    Login
                                </button>
                            </div> 
                            <p  className="pt-1">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            <div  className="">
                                <span>{alert}</span>
                            </div>  
                        </form>

                    </div>

                </div>
            </div>

        </div>
    );

}
export default Login;