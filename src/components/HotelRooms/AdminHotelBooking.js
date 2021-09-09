import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";


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
    axios.get("http://localhost:8070/hotelbooking/admin").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingBooking
        });
      console.log(this.state.hotelbooking);
      }
    });
  } 



  render() {
    return (
      <div className="info">
            <div className="container">
            <p>All Hotel Booking Details</p>
             
            <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Room Type</th>
            <th scope="col">Capacity</th>
            <th scope="col"> Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Arrival Date</th>
            <th scope="col">Departure Date</th>
           
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{posts.roomType}</td>
            <td>{posts.capacity}</td>
            <td>{posts.name}</td>
            <td>{posts.email}</td>
            <td>{posts.arrivalDate}</td>
            <td>{posts.departureDate}</td>
           
          </tr>
          ))}
          
        </tbody>
      </table>
      
       
          </div>
          </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button style={{marginLeft:230}}>Print this out!</button> }
          
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
