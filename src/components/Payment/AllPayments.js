import React, {Component} from 'react'
import axios from 'axios';
import '../../Styles/Payment.css'

export default class AllPayments extends Component{

  constructor(props){
    super(props);
    this.state={
      payments:[]
    };
  }

  componentDidMount(){
    this.retrievePayments();
  }

  retrievePayments(){
    axios.get("http://localhost:8070/payment").then(res=>{
      if(res.data.success){
        this.setState({
          payments:res.data.existingPayment
        });
        console.log(this.state.payments)
      }
    })
  }

  onDelete = (id)=>{
    axios.delete(`http://localhost:8070/payment/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
      this.retrievePayments();
    })
  }

  render(){

    return(
      <div>
      <div className="info">
      <div className="container">
        <p> All Payments</p>
         
        <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Reference</th>
        <th scope="col">Name</th>
        <th scope="col">Paid For</th>
        <th scope="col">Method</th>
        <th scope="col">Card</th>
        <th scope="col">Time</th>
        <th scope="col">No</th>
        <th scope="col">Amount</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {this.state.payments.map((payments,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        
        <td>{payments.reference}</td>
        <td>{payments.name}</td>
        <td>{payments.payf}</td>
        <td>{payments.method}</td>
         <td>
         <a href ={`/payment/${payments._id}`} style={{textDecoration:'none'}}>
             {payments.card}</a></td>
         <td>{payments.time}</td>
         <td>
         
             {payments.no}</td>
         <td> Rs &nbsp;{payments.amount}</td>
        <td>
        <a className ="btn btn-warning" href ={`/payment/edit/${payments._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>&nbsp;
     

        
          <a className ="btn btn-danger" href="#" onClick={()=>this.onDelete(payments._id)} >
          <i className="fas fa-edit"></i>&nbsp;Delete
          </a>
        </td>
      </tr>
      ))}
      
    </tbody>
  </table>

  
   
   
      </div>
      <br></br>
      </div></div>
    )
  }
}
