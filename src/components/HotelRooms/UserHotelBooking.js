import React, {Component } from 'react';
import axios from 'axios';
import hotelimg from '../../Images/simple-house-logo.png'
import luxurious from '../../Images/aa.jpg'
import '../../Styles/templatemo-style.css'


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
			<div class="parallax-window" data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
      <img src={luxurious} alt="Logo" class="shimg" />
				<div class="tm-header">
					<div class="tm-header-inner">
            <div class="row" id="bokrow">
						<div class="col-md-6 col-12">
							<img src={hotelimg} alt="Logo" class="tm-site-logo" /> 
							<div class="tm-site-text-box">
								<h1 class="tm-site-title">My Reservation</h1>
                <h6 class="tm-site-description">Dream Travelers</h6>
							</div>
						</div>
						<nav class="col-md-6 col-12 tm-nav">
							<ul class="tm-nav-ul">
								<li class="tm-nav-li"><a href ={"/hotelpackage"} class="tm-nav-link ">Rooms</a></li>
								<li class="tm-nav-li"><a href ={"/userhotelbooking"} class="tm-nav-link active">My Booking</a></li>
							</ul>
						</nav>	
					</div>
          </div>
				</div>
			</div>
      
  
            
              
           
 <div class="bokpadding">          
<div class="hero-image">
  {this.state.posts.map((posts,index)=>(
    <div class="bokbox"> 
      <table class="boktable">

        <tr>
          <h3>
            <td class="boktd">
              <a href={`/userhotelbooking/hotelbookingdetails/${posts._id}`} style={{textDecoration:'none'}}>
                      {posts.roomType}
              </a>
            </td>
          </h3>
        </tr>

        <tr>
          <td class="boktd">Arrival Date: {posts.arrivalDate}</td>
        </tr>

        <tr>
          <td class="boktd">Departure Date: {posts.departureDate}</td>
            <th class="bokth">
            <a href={`/userhotelbooking/hotelbookingdetails/${posts._id}`}>
    <button class="bokbtn">Details</button>
</a>
            </th>
        </tr>
      </table>
    </div>
  ))}
</div>
</div> 


{/**  <tbody>
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
            <a className ="btn btn-warning" href={`/userhotelbooking/hotelbookingdetails/${posts._id}`}>
              <i className="fas fa-edit"></i>Edit Booking
            </a>
        </td>
        </tr>
    ))}
    
  </tbody>*/}


</div>
        )
    }
}
