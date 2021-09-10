import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";


function foremail (){

    const email = document.getElementById('input').value;
    if (email == '' || email.includes('@'  && '.com') == false ){

        alert("Enter Valid email Address")
        return false;
    }
    if(window.confirm("Do you want Reset Password")){
    var hidden = false;
     document.getElementById('emailval').innerHTML= "Password Rest Success! Check Your Email";

     document.getElementById('h2').style.visibility = 'hidden';
     document.getElementById('input').style.visibility = 'hidden';
     document.getElementById('button').style.visibility = 'hidden';


    }
   
}




const forget =()=>{

return(
    <div>
        <Header/>
  
    <div className="body1">
        <form  className="form1"  >
            <h2 id='h2'>Enter Your Email</h2>
          <h2 id="emailval"></h2>
            <input id="input" type="email" placeholder="Email" required/>

            < button id="button" className="button1" type="button" onClick={foremail} >Submit</button>
        </form>
      
    </div>
        <Footer/>
    </div>
)

}

export default forget;