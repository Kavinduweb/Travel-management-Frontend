import React, {Component} from 'react';
import axios from "axios";



export default class adminhotelpackageDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/hotelpackage/read/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      post:res.data.HotelPackage
    });
      }
    });
  }
  

render(){

const {roomType,details,price,size,maxCapacity} = this.state.post;

  return(
    <div className="info">
    <div className="container" style={{marginTop:'20px'}}>
      <h4>{roomType}</h4>
      <hr/>      
    <dl className="row" id="bokrow">
             <dt className="col-sm-3">Details</dt>
             <dd className="col-sm-9">{details}</dd>

             <dt className="col-sm-3">Price</dt>
             <dd className="col-sm-9">{price}</dd>

             <dt className="col-sm-3">Size</dt>
             <dd className="col-sm-9">{size}</dd>

             <dt className="col-sm-3">Max Capacity</dt>
             <dd className="col-sm-9">{maxCapacity}</dd>

             
    </dl>   

    </div>
    </div>

  )
}
}