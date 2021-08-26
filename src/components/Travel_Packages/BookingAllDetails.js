import React,{Component} from 'react'
import axios from 'axios';

export default class AllBooking extends Component{

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


render(){
  return(
    <div className="container">
      <p> Package Booking Details</p>
       
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Join Place</th>
     
    </tr>
  </thead>
  <tbody>
    {this.state.posts.map((posts,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{posts.name}</td>
      <td>{posts.phone}</td>
      <td>{posts.address}</td>
      <td>{posts.email}</td>
      <td>{posts.joinplace}</td>
     
    </tr>
    ))}
    
  </tbody>
</table>

 
    </div>
  )
}

}