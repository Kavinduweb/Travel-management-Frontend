import React, {Component } from 'react';
import axios from 'axios';


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
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">create your Booking</h1>
                <form className="needs-validation" no noValidate>
                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Room Type</label>
                        <input type="text"
                        className="form-control"
                        name="roomType"
                        placeholder=""
                        value={roomType}
                        disabled
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Capacity</label>
                        <input type="text"
                        className="form-control"
                        name="capacity"
                        placeholder=""
                        value={maxCapacity}
                        disabled
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Arrival Date</label>
                        <input type="date"
                        className="form-control"
                        name="arrivalDate"
                        placeholder="YY/MM/DD"
                        value={this.state.arrivalDate}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Departure Date</label>
                        <input type="date"
                        className="form-control"
                        name="departureDate"
                        placeholder="YY/MM/DD"
                        value={this.state.departureDate}
                        onChange={this.handleInputChange}/>
                    </div>

<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
    &nbsp; Confirm
</button>


                </form>
            </div>
            </div>
        )
    }
}