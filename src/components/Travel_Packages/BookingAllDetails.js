import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";
import HeaderAdmin from '../HeaderAdmin'


class ComponentToPrint extends React.Component{

  constructor(props){
    super(props);
    this.state={
      posts:[]
    };
  }
  
  componentDidMount(){
    this.retrievePosts();
  }
  
  retrievePosts(){
    axios.get("http://localhost:8070/packagebooking/allbookings").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.allBookings
        });
      console.log(this.state.packagebooking);
      }
    });
  }
  

  render() {
    return (
      <div>
      <HeaderAdmin/>
  
      <div className="infoadmin " > 
<div className="container">
      <ReactToPrint
          trigger={() =>
            
          
            <button type="button" class="btn btn-secondary" style={{marginInlineStart:'80%'}} ><i class="fas fa-print mr-2"></i>Print this out!</button> }
          
          content={() => this.componentRef}
        /> 
      <div   ref={(Component) => (this.componentRef = Component)}>
      <h2> Package Booking Details</h2>
        <hr/>
      
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Package Name</th>
        <th scope="col">Name</th>
        <th scope="col">Contact Number</th>
        <th scope="col">Address</th>
        <th scope="col">Email</th>
        <th scope="col">Join Place</th>
        <th scope="col">Booking Date</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.packagename}</td>
        <td>{posts.name}</td>
        <td>{posts.phone}</td>
        <td>{posts.address}</td>
        <td>{posts.email}</td>
        <td>{posts.joinplace}</td>
        <td>{posts.date}</td>
       
      </tr>
  
      ))}
      
    </tbody>
  </table>
  
  
   </div></div>
      </div>
  
</div>


    );
  }
}


export default ComponentToPrint;
