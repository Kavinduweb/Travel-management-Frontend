import React, {Component} from 'react'
import axios from "axios";

import { reference } from '@popperjs/core';

export default class AddPayment extends Component{

  constructor(props){
    super(props)

    this.onChangeReference =this.onChangeReference.bind(this);
    this.onChangeName =this.onChangeName.bind(this);
    this.onChangePay=this.onChangePay.bind(this);
    this.onChangeMethod=this.onChangeMethod.bind(this);
    this.onChangeCard=this.onChangeCard.bind(this);
    this.onChangeTime=this.onChangeTime.bind(this);
    this.onChangeNo=this.onChangeNo.bind(this);
    this.onChangeAmount=this.onChangeAmount.bind(this);


    this.state={
      reference:"",
      name:"",
      payf:"Hotel Booking",
      method:"",
      card:"",
      time:"",
      no:"",
      amount:""
    }

    
   }
    onChangeReference (e){
      this.setState({reference:e.target.value})
    }
    onChangeName (e){
      this.setState({name:e.target.value})
    }
    onChangePay (e){
      this.setState({payf:e.target.value})
    }
    onChangeMethod (e){
      this.setState({method:e.target.value})
    }

    onChangeCard (e){
      this.setState({card:e.target.value})
    }
    onChangeTime (e){
      this.setState({time:e.target.value})
    }
    onChangeNo (e){
      this.setState({no:e.target.value})
    }
    onChangeAmount (e){
      this.setState({amount:e.target.value})
    }
    


    onSubmit= (e)=>{
      e.preventDefault();
      
      console.log('Payment Added');
      

      const{reference,
        name,
        payf,
        method,
        card,
        time,
        no,
        amount}=this.state;

        const data={
      reference:reference,
      name:name,
      payf:payf,
      method:method,
      card:card,
      time:time,
      no:no,
      amount:amount
      }

      console.log(data)
      axios.post("http://localhost:8070/payment/add",data).then((res=>{
        if(res.data.success){
          this.setState(
            
             window.location.replace("/payment")
            

          
          )

          }

        })
     

      
      )}

      

 render(){

  const{payf} = this.state;
  const{method}= this.state;
   return(
     <div className="info" id="pybody">
     <div className="col-md-8 mt-4 mx-auto">
       <h1 className="h3 mb- font-weight-normal">Add Payment</h1>
       
       <form className="needs-validation" onSubmit={this.onSubmit}>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Reference</label>
           <input type="text" required className="form-control" name="reference" placeholder="Enter Reference" required ="required"
           value={this.state.reference} onChange={this.onChangeReference}   />
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Name</label>
           <input type="text"  className="form-control" name="reference" placeholder="Enter Name" required ="required"
           value={this.state.name} onChange={this.onChangeName} />
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
         <label style={{marginBottom:'5px'}}> Pay For</label>
         <select   className="form-select" aria-label="Default select example" id="types" value={payf} onChange={this.onChangePay}>
           <option value="Hotel Booking">Hotel Booking</option>
           <option value="Travel Package">Travel Package</option>
           <option value="Equipment Hiring">Equipment Hiring</option>
           <option value="Activity Booking">Activity Booking</option>
         </select>
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
         <p style={{marginBottom:'5px'}} >Card Type</p>
         <label> Visa
           <input type="radio" value="Visa" checked={method==="Visa"}
           onChange={this.onChangeMethod}/> 
         </label> 
         <label> MasterCard
           <input type="radio" value="MasterCard" checked={method==="MasterCard"}
           onChange={this.onChangeMethod}/>
         </label>
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Card Number</label>
           <input type="text" className="form-control" name="reference" placeholder="Enter Card Number"
           value={this.state.card} onChange={this.onChangeCard} maxLength="9" required ="required"/>
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Date</label>
           <input type="date" className="form-control" name="reference" placeholder="MM/YY"
           value={this.state.time} onChange={this.onChangeTime}  required ="required"/>
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>CVV</label>
           <input type="text" className="form-control" name="reference" placeholder="Enter CVV"
           value={this.state.no} onChange={this.onChangeNo} maxLength="3" required ="required"/>
         </div>
         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Amount</label>
           <input type="text" className="form-control" name="reference" placeholder="Enter Amount" 
           value={this.state.amount} onChange={this.onChangeAmount} required ="required"/>
         </div>

         <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}  >
           <i className="far fa-check-square"></i>
           &nbsp; Pay
         </button>



         


         

         
       </form>
     </div><br/><br></br>
     </div>
   )
 }

}
