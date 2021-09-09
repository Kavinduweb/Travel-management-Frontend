import React, {Component} from 'react';
import axios from "axios";
import '../../Styles/templatemo-style.css'



export default class hotelpackageDetails extends Component {

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
  

  const {roomType,details,price,size,maxCapacity,packageImage} = this.state.post;

    return(
      
      <div className="info">
        <div class="container">
            <div class="row" id="bokrow">
              <div class="col-md-12">
                <div class="mu-about-area">
                <br></br>
                        <br></br>
                        <br></br>
                  <div class="row" id="bokrow">
                    <div class="col-md-6">
                      <div class="mu-about-left">
                        <img class="detailsimg" src={`/uploads/${packageImage}`} alt="Men Speaker"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mu-about-right">
                        <br></br>
                        <h2 class="detailstitle"> {roomType}</h2><br></br> 
                        <p>{details}</p>
                        <p class="detailsprice">Per Day: {price}</p>
                        <p className="tm-gallery-price">Room Size: {size}</p>
                        <p>Maximum people: {maxCapacity}</p>
                        <button className="btn btn-primary" style={{backgroundColor: "#192c3e",width: "20%"}}><a href={`/addnewhotelbooking/${this.state.post._id}`} style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
