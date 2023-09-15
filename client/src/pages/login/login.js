import {useState} from 'react';
import './login.css';
import { auth, provider } from "../../config/firebase"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import GoogleButton from 'react-google-button';
import FacebookLogin from 'react-facebook-login';



export const Login = () => {

    const navigate = useNavigate();
    
    const [pass, setPass] = useState("");
    const [cPass, setcPass] = useState("");
    
    // Google User Login
    const [gUsercheck, setGUserCheck] = useState(false);
    const [gPassword, setGPassword] = useState("");
    const [gUsername, setGUsername] = useState("");
    const [gEmail, setGEmail] = useState("");
    const [gImage, setGImage] = useState("");


    const [obj, setObj] = useState({
        name: "",
        email: "",
        password: "",
        admin: false
    });
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    
    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        
        setObj({
            ...obj,
            [field]: value
        });

        console.log(obj);

    }

    const handleCPass = (event) => {
        setcPass(event.target.value);
        console.log(cPass, obj.password);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(obj);
        const response = await axios.post("http://localhost:3001/auth/register", obj);
        alert(response.data.message);
    }


    const signInWithGoogle = async () => {

        const result = await signInWithPopup(auth, provider);
        const userEmail = result.user.email;
        const response = await axios.post("http://localhost:3001/auth/userExist", {email: userEmail});




        
        setGUsername(result.user.displayName);
        setGEmail(result.user.email);
        setGImage(result.user.photoURL);
        const userExist = response.data.userExist;

        if (userExist) {
            const res = await axios.post("http://localhost:3001/auth/googleLogin", {email: userEmail});

            window.localStorage.setItem("access-token", res.data.token);
            window.localStorage.setItem("userID", res.data.userID);
            navigate("/");
        } else {
            setGUserCheck(true);
        }

    }

    const handleGoogleRegister = async () => {
        const finalUser = {name: gUsername, email: gEmail, password: gPassword, imageURL: gImage};
        
        const response = await axios.post("http://localhost:3001/auth/register", finalUser);
        console.log(response.data.message);
        const res = await axios.post("http://localhost:3001/auth/login", finalUser);
        window.localStorage.setItem("userID", res.data.userID);
        window.localStorage.setItem("userID", res.data.token);
        alert(res.data.message);
        navigate("/");
    }



    const responseFacebook = (response) => {
        console.log(response);
    }

    const handlelogin = async (event) => {
        event.preventDefault();
        const finalUser = {email: loginEmail, password: loginPass};

        const response = await axios.post("http://localhost:3001/auth/login", {email: loginEmail, password: loginPass});

        if (response.data.success === true) {
            alert(response.data.message);
            console.log(finalUser);
            window.localStorage.setItem("userID", response.data.userID);
            window.localStorage.setItem("access-token", response.data.token);
            navigate("/");
        } else {
            alert(response.data.message);
        }
    }



    return (
        <div className='login-body'>
            <div className='main'>
                <div className='register-container'>
                    <h1 className='container-heading'>Register</h1>
                        {!gUsercheck ? 
                        
                    <div>
                        <form action="">
                            <label className='login-label' htmlFor="name">Name: </label><br />
                            <input className='login-input' type="text" name="name" onChange={handleChange}/><br />
                            <label className='login-label' htmlFor="email">Email: </label><br />
                            <input className='login-input' type="text" name="email" onChange={handleChange}/><br />
                            <label className='login-label' htmlFor="password">Password: </label><br />
                            <input className='login-input' type="password" name="password" onChange={handleChange}/><br />
                            <label className='login-label' htmlFor="cpassword">Confirm Password: </label><br />
                            <input className='login-input' type="password" name="cpassword" onChange={handleCPass}/><br />
                            
                            {obj.password === cPass ? "" : <p className='password-alert0'>Password entered in both fields is different..</p>}
                            
                            {obj.password === cPass ? <button onClick={handleSubmit} className='submit-btn'>Register</button> : <button className='noSubmit-btn submit-btn'>Register</button>}
                        </form>
                    </div>
                    : <div>
                    <p className='welcome'>Welcome {gUsername}!</p>
                    <p className='welcome'>You need to register..</p>

                    <label className='login-label' htmlFor=''>Create a Password: </label><br />
                    <input type="password" name='gPassword' className='login-input' onChange={(event) => {setGPassword(event.target.value)}}/> <br />
                    <button className='submit-btn' onClick={handleGoogleRegister}>Register</button>
                </div> }
                </div>



                <div className='login-container'>
                    <h1 className='container-heading'>Login</h1>
                    <div>
                        <form action="">
                            <label className='login-label' htmlFor="email">Email: </label><br />
                            <input className='login-input' type="text"  onChange={(event) => {setLoginEmail(event.target.value); console.log(loginEmail);}}/><br />
                            <label className='login-label' htmlFor="password">Password: </label><br />
                            <input className='login-input' type="password" onChange={(event) => {setLoginPass(event.target.value); console.log(loginEmail);}} /><br />
                            <button className='submit-btn' onClick={handlelogin}>Login</button>
                        </form>
                    </div>
                        { gUsercheck ? 
                        "" :  
                        <div className='other-logins'>
                        <p>Continue with other login methods: </p>
                    
                        <div className='other-auth'>
                            <GoogleButton onClick={signInWithGoogle} /> 
                            <br />
                            <FacebookLogin className="facebook" appId="1088597931155576" autoLoad={true} fields="name,email,picture" callback={responseFacebook}/>
                    
                        </div>
                    </div>}
                    
                    
                </div>
            </div>

        </div>
    )
}