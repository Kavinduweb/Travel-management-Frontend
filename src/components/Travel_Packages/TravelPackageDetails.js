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

const {_id,packageName,destination,discription,date,noofdays,noofnights,vehical,perperson,packageImage} = this.state.post;

  return(
    <div className="infotr">
    <div className="container"  style={{marginTop:'10px'}}>
    <div class="card">
    <img style={{height:"400px"}} class="card-img-top"src={`/uploads/${packageImage}`} alt="..."  />
    <div class="card-body" style={{backgroundColor:"#DDE8E8"}}>
      <h5 class="card-title">{packageName}</h5>
      <p class="card-text">{date}   </p>
      <p class="card-text">{destination}   </p>
      <p class="card-text">{discription}   </p>
    </div>
    <div class="card-footer" style={{backgroundColor:"#ADADAD"}}>


    <ul class="postcard__tagbox" style={{fontSize:"16px"}}>
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>PP&nbsp;{perperson}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>{noofdays}&nbsp;{noofnights}</li>
					<li class="tag__item play blue">	<i class="fas fa-car mr-2"></i>{vehical}	</li>
             <li >
             <small class="text-muted" style={{marginInlineStart:"140%"}}>  <button type="submit" class="btn btn-danger" style={{width:"300px",fontSize:"20px"}}><a href={`/bookingpackage/${_id}`} style={{textDecoration:'none' ,color:'white'}} >Book Package</a></button>
 </small> </li>
				</ul>

    </div>
  </div>
    <br/><br/><br/>

  
  </div>
    </div>

  )
}
}



 



