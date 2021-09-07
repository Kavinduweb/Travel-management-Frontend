import React, {Component } from 'react';
import axios from 'axios';

export default class UserHotelBooking extends Component{

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
        axios.get("http://localhost:8070/hotelbooking/").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingBooking
            });
          console.log(this.state.hotelbooking);
          }
        });
      } 


      onDelete=(id)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you Sure you want to delete this item?")){

        
        axios.delete(`http://localhost:8070/hotelbooking/delete/${id}`).then((res)=>{
          alert("Delete Successfully");
          this.retrievePosts();
        })
      }
      }
      

    

    render(){
        return(
          <div className="info">
            <div className="container">
            <h2>My Booking</h2><br></br>
             
<table className="table">

  <tbody>
    {this.state.posts.map((posts,index)=>(
      <tr key={index}>

              <td>
                <br></br>
                <h5>
                  <a href={`/userhotelbooking/hotelbookingdetails/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.roomType}
                  </a>
                </h5>
                Arrival Date: {posts.arrivalDate}<br></br>
                Departure Date: {posts.departureDate}<br></br>
              </td>

          <td>
            <br></br><br></br><br></br>
            <a className ="btn btn-warning" href ={`/edithotelbooking/${posts._id}`}>
              <i className="fas fa-edit"></i>Edit Booking
            </a>&nbsp;
            <a className ="btn btn-danger" href ="#" onClick={()=>this.onDelete(posts._id)}>
              <i className="fas fa-edit"></i>&nbsp;Cancle Booking
            </a>
        </td>
        

    </tr>
    ))}
    
  </tbody>
</table>
      
      <button className="btn btn-success"><a href="/hotelpackage" style={{textDecoration:'none', color:'white'}}>Back to Rooms</a></button>
      <br></br>
      <br></br>
      <br></br> 
</div>
</div>
        )
    }
}
