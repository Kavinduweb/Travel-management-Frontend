import React, { Component } from 'react'
import axios from 'axios';
import './inq.css'
import Header from '../Header';
import Footer from '../Footer';





export default class CreateInquiry extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:"",
            formErrors : {name:'', nic:'',phone:'',email:'',inq:''},
            nameValid:false,
            nicValid:false,
            phoneValid:false,
            emailValid:false,
            inqValid:false,

            View:[]
        }

    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
            
        })
    }
     
    componentDidMount(){
        const userInfo = localStorage.getItem('userInfo');
        
        if (userInfo == null){

            alert("You Are Not Registered User")
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
    
        }
        else (
            console.log("cant")
        )

    })
    }
    onSubmit= (e) =>{
        e.preventDefault();

        const name1 = document.getElementById('Name');
        const nic1 = document.getElementById('nic');
        const email1 = document.getElementById('email');
        const phone1 = document.getElementById('phone');
        const inq1 = document.getElementById('inq');
            if (name1.value === '' || name1.value == null){
                alert('Please enter Your Name')
                return false;
        }
            else if (nic1.value=== ''||nic1.value == null){
                alert('Please enter Your NIC')
                return false;
        }
            else if (email1.value === '' || email1.value == null){
                alert('Please enter Your Email Address')
                return false;
        }
            else if (phone1.value === '' || phone1.value == null){
                alert('Please enter Your Phone Number')
                return false;
        } 
            else if (inq1.value === '' || inq1.value == null){
                alert('Please enter Your Inquiry')
                return false;
        }

        const {name,nic,phone,email,inq} = this.state;

        const data= {
            name:this.state.View.Name,
            nic:nic,
            phone:phone,
            email:this.state.View.Email,
            inq:inq            
        }

       

        axios.post("http://localhost:8070/inquiry/add",data).then((res) =>{
           
        if(res.data.success){
            alert("You Have Successfully Created an Inquiry")
            
                this.setState({
                    name:"",
                    nic:"",
                    phone:"",
                    email:"",
                    inq:""
                })

            }
            

        })

        window.location.replace("/add")
       

    }
    
     
    


    render(){
        return(
           
               <div>
                   <Header/>
                   <div className="info">
            <div className="vj" >
 
            <div>
           


            <div className="needs-validation">
          
                <form  noValidate  >
                <h2 > Create New Inquiry</h2>
                <hr/>

                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>Name</label>
                            <input 
                            type="text"
                            id="Name"
                            className="form-control"                
                            name="name"
                            placeholder="Enter Your Name"
                            value={this.state.View.Name} 
                            onChange={this.handleInputChange}/>

                    </div>
            
                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>NIC</label>
                            <input 
                            type="text" 
                            id="nic"
                            className="form-control"                
                            name="nic"
                            placeholder="Enter Your NIC"
                            value={this.state.nic} 
                            onChange={this.handleInputChange}/>
                           
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone Number</label>
                            <input 
                            type="text" 
                            id="phone"
                            className="form-control"                
                            name="phone"
                            placeholder="Enter Your Phone Number"
                            value={this.state.phone} 
                            onChange={this.handleInputChange}/>
                           
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                            <input 
                            type="email" 
                            className="form-control"
                            id="email"             
                            name="email"
                            placeholder="Enter Your Email"
                            value={this.state.View.Email} 
                            onChange={this.handleInputChange}/>
                         
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Inquiry</label>
                            <input 
                            type="text"
                            id="inq" 
                            className="form-control"                
                            name="inq"
                            placeholder="Enter Your Inquiry"
                            value={this.state.inq} 
                            onChange={this.handleInputChange}/>
                          
                    </div>

                    <button className="btn btn-dark" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
                        <i className="fa fa-check-square"></i>    
                        &nbsp; Create Inquiry    
                    </button>

                        &nbsp;
                 
                    <a href={"/view"} > <button className="btn btn-dark"type="button" style={{margintop:'15px'}} > 
                        <i className="fa fa-chevron-circle-right"></i>    
                        &nbsp; Previous Inquiries
                        </button>
                    </a>  

                </form>
      
            </div>
        </div> 
        </div>
            </div>

        <Footer/>
        </div> 
            
        
        )

    }
}