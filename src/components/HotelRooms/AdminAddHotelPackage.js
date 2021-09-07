import React, {Component } from 'react';
import axios from 'axios';


export default class AdminAddPackage extends Component{

constructor(props){
    super(props);
    this.state={
        roomType:"",
        details:"",
        price:"",
        size:"",
        maxCapacity:""
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

        const {roomType,details,price,size,maxCapacity}= this.state;

        const data={
            roomType:roomType,
            details:details,
            price:price,
            size:size,
            maxCapacity:maxCapacity
        }

        console.log(data)

axios.post("http://localhost:8070/hotelpackage/add",data).then((res)=>{
    if(res.data.success){
        window.location.href = "/adminhotelpackage";
    }
})

    }



    render(){
        return(
            <div className="info">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New room</h1>
                <form className="needs-validation" no noValidate>
                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Room Type</label>
                        <input type="text"
                        className="form-control"
                        name="roomType"
                        placeholder="Room Type"
                        value={this.state.roomType}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Details</label>
                        <input type="text"
                        className="form-control"
                        name="details"
                        placeholder="Room Details"
                        value={this.state.details}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Price</label>
                        <input type="text"
                        className="form-control"
                        name="price"
                        placeholder="price"
                        value={this.state.price}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Size</label>
                        <input type="text"
                        className="form-control"
                        name="size"
                        placeholder="Room Size"
                        value={this.state.size}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>max Capacity</label>
                        <input type="text"
                        className="form-control"
                        name="maxCapacity"
                        placeholder="Max Capacity"
                        value={this.state.maxCapacity}
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