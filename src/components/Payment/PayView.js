import React, { useEffect, useState } from 'react'
import axios from "axios";



export default function PayView (){
   
  
	const [no,setno] = useState("");
   

    const getData =async (e)=>{

        e.preventDefault();

        const no1 = no;
        const url="http://localhost:8070/payment/view/";

     
        const res = await axios.get(url+no1).then((res)=> {

        document.getElementById("reference").innerHTML =res.data.reference;
        document.getElementById("name").innerHTML =res.data.name;
        document.getElementById("card").innerHTML =res.data.card;
        document.getElementById("payf").innerHTML =res.data.payf;
        document.getElementById("method").innerHTML =res.data.method;
        document.getElementById("no").innerHTML =res.data.no;
        document.getElementById("time").innerHTML =res.data.time;
        document.getElementById("amount").innerHTML =res.data.amount;
        const mongoid=res.data.id;
          
       
           if(res=true) {
                alert("You are a valid user");
                window.location.replace("/payment/details/" + mongoid)

           }
           if(res=false) {
                window.location.replace("/")  
           }
           

            }).catch((err)=>{
            alert('You Are Not a Verified User!!');
    })

    }



    
    
   
    
    return(
        <div >

                <div >
		            <form className="needs-validation-view"   >
			
                    <h3>Enter Your National Identity Card Number (no)</h3>
                        <hr/>
			            <input type="no" id ="no" placeholder="no" value={no} onChange={(e)=>{  setno(e.target.value) ; }}/>
                        <br/>
                        <a>
			                <button  className="btn mt-3 btn-dark"  style={{textDecoration:'none',color:'white'}} onClick={getData}>
                            <i className="fa fa-arrow-circle-right"></i> Submit
                            </button>
                        </a>
                    </form>

                    < div style={{visibility: 'hidden'}} >
                        <h1 id="reference" ></h1>
                        <h2 id="no" ></h2>
                        <h2 id="name" ></h2>
                        <h2 id="time" ></h2>
                        <h2 id="card" ></h2>
                        <h2 id="payf" ></h2>
                        <h2 id="method" ></h2>
                        <h2 id="amount" ></h2>
                    </div>
	            </div>
            </div>
         

            )
    }