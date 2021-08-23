import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../../src/Form.css';
import axios from "axios";
import { configure } from '@testing-library/react';

export default function RegisterUser ({}){

	const history = useHistory();


	const [Name,setName] = useState("");
	const [Email,setEmail] = useState("");
	const [Num ,setNum] = useState("");
	const [Password,setPassword]=useState("");

	const[error,setError] = useState(false);
	const[loding,setLoding]=useState(false);

	useEffect(()=>{

			 const userInfo = localStorage.getItem('userInfo');

			 
			 if (userInfo){
				
				history.push("/profile");
				
			 }
	},[history])


function sendData (){

const NewReg ={

	Name,
	Email,
	Password,
	Num

}
	console.log(NewReg);

	axios.post("http://localhost:8070/Register/add",NewReg).then(()=>{
		alert("success")
	}).catch((err)=>{
		alert(err);
	})
}

const getData = async (e)=>{

	e.preventDefault();
	


	try {
		const config ={
		headers: {
			"Content-type":"application/json"
		}
	}
		setLoding(true);
			const { data } = await  axios.post(

				"http://localhost:8070/Register/login",
				{
					Email,Password,
				},
				config
			);
			console.log(data)
				localStorage.setItem("userInfo",JSON.stringify(data));

				history.push('/profile');

				setLoding(false);

					console.log("err")
				
				
	}catch(error){

		setError(error.response.data.message);
	}

}


return (

		
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={sendData}action="#">
			<h1>Create Account</h1>
			
			<input type="text" placeholder="Name" id="Name" onChange={(e)=>{  setName(e.target.value) ; }} required/>
			<input type="email" placeholder="Email" id="Email" onChange={(e)=>{  setEmail(e.target.value) ; }} required />
       	 	 <input type="number" placeholder="Mobile" id="Number"  onChange={(e)=>{ setNum (e.target.value) ; }} required/>
        
			<input type="password" placeholder="Password" id="Password" onChange={(e)=>{setPassword(e.target.value) ;}}required/>
			<button >Sign Up</button>
		</form>
	</div> 
	<div className="form-container sign-in-container">
		<form  onSubmit={getData}>
			<h1>Sign in</h1>
			
			<span>or use your account</span>
			<input type="email" placeholder="Email" value={Email} onChange={(e)=>{  setEmail(e.target.value) ; }} />
			<input type="password" placeholder="Password" value={Password} onChange={(e)=>{  setPassword(e.target.value) ; }}  />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={window['log']}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={window['reg']}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


)

}

