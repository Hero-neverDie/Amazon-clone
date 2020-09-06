import React,{useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase"
function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const login = (event) =>
    {
        event.preventDefault();//stop refresh

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")

        })
        .catch((e) => alert(e.message));
        
    } 
    const register = (event) =>
    {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{

                history.push("/")
            })
            .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/" >
                <img className="login__logo" src = "https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
            </Link>
            
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password}  onChange={event => setPassword(event.target.value)}   type="password"></input>
                    <button onClick={login} className="login__signInButton">Sign in</button>
                </form>
                <p> buy as much as u can</p>
                <button onClick={register} className="login__registerButton">Create your amazon Account</button>

            </div>
        </div>
    )
}

export default Login
