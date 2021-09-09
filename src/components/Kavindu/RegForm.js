import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../../../src/Form.css'; 
import axios from "axios";
import { configure } from '@testing-library/react';
import Header from '../Header';
import Footer from '../Footer';

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
	
	const email = document.getElementById('logemail');
	const pass = document.getElementById('logpass');

	if(email.value == '' || email.value == null){
		alert("email Required");
		return false;
	}
	else if (pass.value == '' || pass.value == null){
		alert("pass Required");
		return false
	}

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
<div>	<Header/>
	<div className="body1 ">
	
		<div className="info">
<div className="container" id="container">
	<div className="form-container sign-up-container">
	  
		<form onSubmit={sendData} className="form1">
			<h1 className="h1">Create Account</h1>
			
			<input type="text" placeholder="Name" id="Name" onChange={(e)=>{  setName(e.target.value) ; }} required />
			<input type="email" placeholder="Email" id="Email" onChange={(e)=>{  setEmail(e.target.value) ; }}  required/>
       	 	 <input type="number" placeholder="Mobile" id="Number" onChange={(e)=>{ setNum (e.target.value) ; }} required/>
			<input type="password" placeholder="Password" id="Password" onChange={(e)=>{setPassword(e.target.value) ;}} required/>

			<button className="button1 "type="submit">Sign Up</button>
		</form>
		
	</div> 
	<div className="form-container sign-in-container">
	
		<form  onSubmit={getData} className="form1">
			<h1 className="h1">Sign in</h1>
			
			<span className="span">or use your account</span>
			<input type="email" placeholder="Email" id='logemail'value={Email} onChange={(e)=>{  setEmail(e.target.value) ; }} />
			<input type="password" placeholder="Password" id='logpass' value={Password} onChange={(e)=>{  setPassword(e.target.value) ; }}  />
			<a href="#">Forgot your password?</a>
			<button className="button1  ">Sign In</button>
		</form>
		
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="h1">Welcome Back!</h1>
				<p className="p">To keep connected with us please login with your personal info</p>
				<button className="button1 ghost " id="signIn" onClick={window['log']}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="h1">Hello, Friend!</h1>
				<p className="p">Enter your personal details and start journey with us</p>
				<button className="button1 ghost " id="signUp" onClick={window['reg']}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

</div>
</div>


	<Footer/>
</div>
)

}

