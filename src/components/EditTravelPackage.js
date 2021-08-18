import React, {Component} from 'react';
import axios from "axios";

export default class EditPackage extends Component {

  

  constructor(props){
    super(props);
    this.state={
            packageName:"",
            destination:"",
            district:"",
            date:"",
            noofdays:"",
            noofnights:"",
            vehical:"",
            perperson:""
    }
  }


  handleInputChange=(e)=>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
       [name]:value
    })
  }

  onSubmit=(e)=>{

    e.preventDefault();
    const id = this.props.match.params.id;
    const {packageName,destination,district,date,noofdays,noofnights,vehical,perperson}=this.state;

    const data={
      packageName:packageName,
      destination:destination,
      district:district,
      date:date,
      noofdays:noofdays,
      noofnights:noofnights,
      vehical:vehical,
      perperson:perperson
    }

    console.log(data)

    axios.put (`http://localhost:8070/travelpackages/admin/update/${id}`,data).then((res)=>{
      
    if(res.data.success){
      alert("Package updated successfully")
     
      this.setState(
        {
            packageName:"",
            destination:"",
            district:"",
            date:"",
            noofdays:"",
            noofnights:"",
            vehical:"",
            perperson:""
        }
        
      )
    }  
  
    })

  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/travelpackages/admin/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      packageName:res.data.post.packageName,
      destination:res.data.post.destination,
      district:res.data.post.district,
      date:res.data.post.date,
      noofdays:res.data.post.noofdays,
      noofnights:res.data.post.noofnights,
      vehical:res.data.post.vehical,
      perperson:res.data.post.perperson
    });
      }
    });
  }

render(){
return(
  <div className="container">
  <div className="w-75 mx-auto shadow p-5">
      <h2 className ="text- mb-10">Edit Package Details</h2>
      <hr/>   <br></br>
<form className="needs-validation"noValidate>
<div class="form-group">
<label style={{marginBottom:'5px'}}>Package Name</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Package Name"
   name="packageName"
   value={this.state.packageName}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>Destination</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Destination"
   name="destination"
   value={this.state.destination}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>District</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter District"
   name="district"
   value={this.state.district}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>Date</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Date"
   name="date"
   value={this.state.date}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>No of Days</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Days"
   name="noofdays"
   value={this.state.noofdays}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>No of Nights</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Nights"
   name="noofnights"
   value={this.state.noofnights}
   onChange={this.handleInputChange}
/>
</div>

<div class="form-group">
<label style={{marginBottom:'5px'}}>vehical</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Vehical"
   name="vehical"
   value={this.state.vehical}
   onChange={this.handleInputChange}
/>
</div>


<div class="form-group">
<label style={{marginBottom:'5px'}}>Per Person</label>
<input
   type = "text"
   className="form-control form-control-lg"
   placeholder="Enter Per Person"
   name="perperson"
   value={this.state.perperson}
   onChange={this.handleInputChange}
/>
</div>



<button type="submit" class="btn btn-success" onClick={this.onSubmit}>
  <i className="far fa-check-square"></i>
  &nbsp;
  Update Package</button>

</form>
</div>
</div>

) 
}

}