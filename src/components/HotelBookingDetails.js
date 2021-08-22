import React, {Component} from 'react';
import axios from "axios";



export default class HotelBookingDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/hotelbooking/read/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      post:res.data.hotelBooking
    });
      }
    });
  }
  

render(){

const {roomType,capacity,name,email,arrivalDate,departureDate} = this.state.post;

  return(
    <div className="container" style={{marginTop:'20px'}}>
      <h4>{roomType}</h4>
      <hr/>      
    <dl className="row">
             <dt className="col-sm-3">Capacity</dt>
             <dd className="col-sm-9">{capacity}</dd>

             <dt className="col-sm-3">User Name</dt>
             <dd className="col-sm-9">{name}</dd>

             <dt className="col-sm-3">User Email</dt>
             <dd className="col-sm-9">{email}</dd>

             <dt className="col-sm-3">Arrival Date</dt>
             <dd className="col-sm-9">{arrivalDate}</dd>

             <dt className="col-sm-3">Departure Date</dt>
             <dd className="col-sm-9">{departureDate}</dd>

             
    </dl>   

    </div>

  )
}
}