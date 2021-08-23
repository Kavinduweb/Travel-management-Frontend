
import  React from 'react'
import Display from './adminProfileView';

export default function Admin  (){



    
    function myFunction() {
        
        
        const adminuser = document.getElementById('user1').value;
        const adminpass =document.getElementById('pass1').value;

            if(adminuser =="admin" && adminpass =="admin"){
                
                window.location.href="/get" ;
 
            }else{
                alert("login Fail")
                
            }
      }


    return (
        <div>
            

            <form >
                <br></br>
            <h2>System admin Login</h2>

            <input type="text" placeholder="Username" id="user1" ></input>
            <input type="text" placeholder="Password"id="pass1"></input>
            <a className="btn btn-danger"  onClick={myFunction}>
                                <i className ="fas fa-login"></i>&nbsp;Login
                            </a>
           
            
            </form>

         
            
            

                

        </div>
    )

}
