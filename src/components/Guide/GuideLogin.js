import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import "../../Styles/Guide.css";
import Header from '../Header';
import Footer from '../Footer';


const GuideLogin = () => {
    const [guideusername,setguideusername] = useState("");
   

    const getData =async (e)=>{

        e.preventDefault();

        const guideusername1 = guideusername;
        const url="http://localhost:8070/guiderequest/view/";

     
        const res = await axios.get(url+guideusername1).then((res)=> {

        document.getElementById("uname").innerHTML =res.data.uname;
        document.getElementById("phone").innerHTML =res.data.phone;
        document.getElementById("email").innerHTML =res.data.email;
        document.getElementById("destination").innerHTML =res.data.destination;
        document.getElementById("tourdate").innerHTML =res.data.tourdate;
        document.getElementById("noofdates").innerHTML =res.data.noofdates;
        const mongoid=res.data.id;
          
       
           if(res=true) {
                alert("You are a valid user");
                window.location.replace("/guide/handle/" + mongoid)

           }
           if(res=false) {
                window.location.replace("/")  
           }
           

            }).catch((err)=>{
            alert('You Are Not a Verified User!!');
    })

} 
    return (
        <div>
            <Header/>
        <div className="infotr">
        
            <div className="w-50 mx-auto shadow p-5">
                    <form action = "">
                        <center><h3><b>GUIDE LOGIN</b></h3></center>
                        <div>
                            <label htmlFor = "username"><strong>Username</strong></label>
                            <input type = "text" 
                            className="form-control"
                            placeholder="Enter Username" 
                            name = "username" 
                            id = "username"
                            autoComplete = "off"
                            value = {guideusername} 
                            onChange={(e)=>{  setguideusername(e.target.value) ; }} />
                        </div>

                        <br/>


                        <br/>

                        <Button type = "submit" className = "btn-dark" onClick={getData}>Login</Button>

                    </form>
            </div>

            < div style={{visibility: 'hidden'}} >
                        <h1 id="uname" ></h1>
                        <h2 id="phone" ></h2>
                        <h2 id="email" ></h2>
                        <h2 id="destination"></h2>
                        <h2 id="tourdate" ></h2>
                        <h2 id="noofdates" ></h2>
                    </div>
	            </div>
       <Footer/>
   </div>
    
    )
}

export default GuideLogin; 
