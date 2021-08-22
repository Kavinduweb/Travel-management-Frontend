import React, {Component} from 'react'
import axios from 'axios';

export default class EditHotelBooking extends Component{


    constructor(props){
        super(props);
        this.state={
            roomType:"",
            capacity:"",
            name:"",
            email:"",
            arrivalDate:"",
            departureDate:""
        }
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
            const id = this.props.match.params.id;
    
            const {roomType,capacity,name,email,arrivalDate,departureDate}= this.state;
    
            const data={
                roomType:roomType,
                capacity:capacity,
                name:name,
                email:email,
                arrivalDate:arrivalDate,
                departureDate:departureDate
            }
    
            console.log(data)
    
    axios.put(`http://localhost:8070/hotelbooking//update/${id}`,data).then((res)=>{
        if(res.data.success){
            alert("Update Successfully")
            this.setState(
                {
                    roomType:"",
                    capacity:"",
                    name:"",
                    email:"",
                    arrivalDate:"",
                    departureDate:"" 
                }
            )
        }
    })
    
        }
    
    


    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/hotelbooking/read/${id}`).then((res)=>{
          if (res.data.success){
             this.setState({
                roomType:res.data.hotelBooking.roomType,
                capacity:res.data.hotelBooking.capacity,
                name:res.data.hotelBooking.name,
                email:res.data.hotelBooking.email,
                arrivalDate:res.data.hotelBooking.arrivalDate,
                departureDate:res.data.hotelBooking.departureDate
        });
          }
        });
      }


    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit your Booking</h1>
                <form className="needs-validation" no noValidate>
                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Room Type</label>
                        <input type="text"
                        className="form-control"
                        name="roomType"
                        placeholder=""
                        value={this.state.roomType}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Capacity</label>
                        <input type="text"
                        className="form-control"
                        name="capacity"
                        placeholder=""
                        value={this.state.capacity}
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
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Arrival Date</label>
                        <input type="text"
                        className="form-control"
                        name="arrivalDate"
                        placeholder="YY/MM/DD"
                        value={this.state.arrivalDate}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Departure Date</label>
                        <input type="text"
                        className="form-control"
                        name="departureDate"
                        placeholder="YY/MM/DD"
                        value={this.state.departureDate}
                        onChange={this.handleInputChange}/>
                    </div>

<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
    &nbsp; Update
</button>

                </form>
            </div>
        )
    }
}