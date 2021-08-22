import React, {Component} from 'react'
import axios from 'axios';

export default class AdminEditHotelPackage extends Component{


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
            const id = this.props.match.params.id;
    
            const {roomType,details,price,size,maxCapacity}= this.state;
    
            const data={
                roomType:roomType,
                details:details,
                price:price,
                size:size,
                maxCapacity:maxCapacity
            }
    
            console.log(data)
    
    axios.put(`http://localhost:8070/hotelpackage/update/${id}`,data).then((res)=>{
        if(res.data.success){
            alert("Update Successfully")
            this.setState(
                {
                    roomType:"",
                    details:"",
                    price:"",
                    size:"",
                    maxCapacity:""
                }
            )
        }
    })
    
        }
    
    


    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/hotelpackage/read/${id}`).then((res)=>{
          if (res.data.success){
             this.setState({
                roomType:res.data.HotelPackage.roomType,
                details:res.data.HotelPackage.details,
                price:res.data.HotelPackage.price,
                size:res.data.HotelPackage.size,
                maxCapacity:res.data.HotelPackage.maxCapacity
        });
          }
        });
      }


    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Room Details</h1>
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
                        <label style={{marginBottom:'5px'}}>Details</label>
                        <input type="text"
                        className="form-control"
                        name="details"
                        placeholder="Details"
                        value={this.state.details}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Price</label>
                        <input type="text"
                        className="form-control"
                        name="price"
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Size</label>
                        <input type="text"
                        className="form-control"
                        name="size"
                        placeholder="Size"
                        value={this.state.size}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Max Capacity</label>
                        <input type="text"
                        className="form-control"
                        name="maxCapacity"
                        placeholder="Max Capacity"
                        value={this.state.maxCapacity}
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