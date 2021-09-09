import React, {Component } from 'react';
import axios from 'axios';
import '../../Styles/shenukastyle.css'


export default class AddNewHotelBooking extends Component{

constructor(props){
    super(props);
    this.state={
        post:{}
    }
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

    handleInputChange=(e)=>{
        const { name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
       
        e.preventDefault();

        const {capacity,name,email,arrivalDate,departureDate}= this.state;
        const {roomType,details,price,size,maxCapacity} = this.state.post;

        const data={
            roomType:roomType,
            capacity:maxCapacity,
            name:name,
            email:email,
            arrivalDate:arrivalDate,
            departureDate:departureDate
        }

        console.log(data)

axios.post("http://localhost:8070/hotelbooking/add",data).then((res)=>{
    if(res.data.success){
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Your reservation was Successfull, Did you want to pay Now?")){
            window.location.href = "/add";
        }
        else{
            window.location.href = "/userhotelbooking";
        }
        
    }
})

    }

    render(){

        const {roomType,details,price,size,maxCapacity} = this.state.post;

        return(
            <div className="info">

            <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-md-push-5">
						<div class="booking-cta">
							<h1>Make Your</h1>
                            <h1>Reservation</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
								ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
								Perspiciatis.
							</p>
						</div>
					</div>
					<div class="col-md-4 col-md-pull-7">
						<div class="booking-form">
							<form>
                            <div class="row">
									<div class="col-sm-7">
										<div class="form-group">
											<span class="form-label">Your Room Type</span>
                                            <input type="text"
                                            className="form-control"
                                            name="roomType"
                                            placeholder=""
                                            value={roomType}
                                            disabled
                                            onChange={this.handleInputChange}/>
										</div>
									</div>
									<div class="col-sm-5">
										<div class="form-group">
											<span class="form-label">Max Person</span>
											<input type="text"
                                            className="form-control"
                                            name="capacity"
                                            placeholder=""
                                            value={maxCapacity}
                                            disabled
                                            onChange={this.handleInputChange}/>
											<span class="select-arrow"></span>
										</div>
									</div>
								</div>
                                <div class="form-group">
									<span class="form-label">Full Name</span>
                                    <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}/>
								</div>
                                <div class="form-group">
									<span class="form-label">Email</span>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required/>
								</div>
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check In</span>
                                            <input type="date"
                                            required
                                            className="form-control"
                                            name="arrivalDate"
                                            placeholder="YY/MM/DD"
                                            value={this.state.arrivalDate}
                                            onChange={this.handleInputChange}/>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check out</span>
                                            <input type="date"
                                            required
                                            className="form-control"
                                            name="departureDate"
                                            placeholder="YY/MM/DD"
                                            value={this.state.departureDate}
                                            onChange={this.handleInputChange}/>
										</div>
									</div>
								</div>
								<div class="form-btn">
									{/**<button class="submit-btn">Check availability</button>*/}
                                    <button class="submit-btn" type="submit"  onClick={this.onSubmit}>Confirm Booking</button>
								</div>
							</form>
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