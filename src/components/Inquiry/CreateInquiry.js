import React, { Component } from 'react'
import axios from 'axios';
import './inq.css'
import emailjs from 'emailjs-com';
import four from "./four.jpg";
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
            inqValid:false
        }

    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
            
        })
    }
    
    onSubmit= (e) =>{
        e.preventDefault();

        const name1 = document.getElementById('name');
        const nic1= document.getElementById('nic').value;
        const email1 = document.getElementById('email').value;
        const phone1 = document.getElementById('phone');
        const inq1 = document.getElementById('inq');
        const nic2 = document.getElementById('nic').nic2;
        
            if (name1.value === '' || name1.value == null){
                alert('Please enter Your Name')
                return false;
        }
        else if (nic1.length < 8){
            alert('Please enter a valid NIC')
            return false;
        }
        
        else if (phone1.value === '' || phone1.value == null){
            alert('Please enter Your Phone Number')
            return false;
    } 
         else if(email1 == '' || email1.includes('@' && '.') == false ){

            alert("Please enter valid Email Address")
           return false;
           
        }
            
            else if (inq1.value === '' || inq1.value == null){
                alert('Please enter Your Inquiry')
                return false;
        }
           

        const {name,nic,phone,email,inq} = this.state;

        const data= {
            name:name,
            nic:nic,
            phone:phone,
            email:email,
            inq:inq            
        }

       

        console.log(data)

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

     
            
 
    }
    

     
    


    render(){
        return(
            <div >
                <Header/>
                <div className="info"> 
            <div className="vj" >
            
            <div className="needs-validation">
          
                <form  noValidate  >
                <h1 className="nam"> Create New Inquiry</h1>
                <hr/>

                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>Name</label>
                            <input 
                            type="text"
                            id="name"
                            className="form-control"                
                            name="name"
                            placeholder="Enter Your Name"
                            value={this.state.name} 
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
                            value={this.state.email} 
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
        <Footer/>
        </div>   
        )

    }
}