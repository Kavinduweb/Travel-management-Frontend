import React, {Component} from 'react';
import axios from "axios";



export default class PackageDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/travelpackages/admin/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      post:res.data.post
    });
      }
    });
  }
  

render(){

const {packageName,destination,district,date,noofdays,noofnights,vehical,perperson} = this.state.post;

  return(
    <div className="container" style={{marginTop:'20px'}}>
      <h4>{packageName}</h4>
      <hr/>      
    <dl className="row">
             <dt className="col-sm-3">Destination</dt>
             <dd className="col-sm-9">{destination}</dd>

             <dt className="col-sm-3">District</dt>
             <dd className="col-sm-9">{district}</dd>

             <dt className="col-sm-3">Date</dt>
             <dd className="col-sm-9">{date}</dd>

             <dt className="col-sm-3">No of Days</dt>
             <dd className="col-sm-9">{noofdays}</dd>

             <dt className="col-sm-3">No of Nights</dt>
             <dd className="col-sm-9">{noofnights}</dd>

             <dt className="col-sm-3">Vehical</dt>
             <dd className="col-sm-9">{vehical}</dd>

             <dt className="col-sm-3">Per Person</dt>
             <dd className="col-sm-9">{perperson}</dd>

             
    </dl>   

        <button ><a href="/booking" >Book Package</a></button>
 
    </div>

  )
}
}