import React,{Component} from 'react';

import axios from 'axios';


export default class UserProfile extends Component {

    constructor(props){
        super(props);
        
        this.state={
            View:[]

            
        };
    }

    logout(){

       const dat = localStorage.removeItem("userInfo");

       if (dat == null  ){

        alert("log  Out Success ");
        window.location.replace("/")

       }
       else {
           alert("cant log out ")
       }
    }

    
    handleChange=(e)=>{
        this.setState ({ [e.target.name]: e.target.value });
      }

    componentDidMount(){


         const userInfo = localStorage.getItem('userInfo');
        //alert (userInfo);
        if (userInfo == null){

            alert("You Are Not Authorized User")
            window.location.replace("/register")


        }
        var line=[];

        for ( var i =7 ,p=0 ; i !== 31;i++,p++){
            
             
            line.push(userInfo[i]);
          
        }
        const mongoid= line.join('');
        const url ="http://localhost:8070/user/Details/";

        
        axios.get(url+mongoid).then(res =>{
           
        if(res.data.success){
            this.setState({
                View:res.data.BackendData
            
            });
            // console.log(this.state.View);
        }
        else (
            console.log("cant")
        )

    })

     

    }

    render(){


        return(
            <div className="body1">

            <div style={{marginLeft:300}}> 
                 <button onClick={this.logout} >Log out</button>
                 </div>        
             <h2> {this.state.View.Name}'s profile </h2>  
   
               <form>
               <input id="Email" type="text" value={this.state.View.Name} />
               <input id="Name" type="text" value={this.state.View.Email} />
               <input id="Num" type="text" value={this.state.View.Num} />
               <input id="Password" type="Password" value={this.state.View.Password} />

              
               <a className="btn btn-danger"  href={"edit/" + this.state.View._id}>
                                <i className ="fas fa-edit"></i>&nbsp;Edit My Details
                            </a>
        
                            </form> 
                </div>
        )





    
}
}