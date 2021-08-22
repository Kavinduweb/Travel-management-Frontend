import React,{Component} from 'react'
import axios from 'axios';
import '../Styles/TravelPackage.css'

export default class AllPackagesAdmin extends Component{

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
  axios.get("http://localhost:8070/travelpackages").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPackage
      });
    console.log(this.state.travelpackages);
    }
  });
}

onDelete=(id)=>{
  axios.delete(`http://localhost:8070/travelpackages/admin/delete/${id}`).then((res)=>{
    alert("Delete SuccessFully");
    this.retrievePosts();
  })
}



render(){
  return(
    <div className="container">
      <p> All Packages</p>
       
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Package Name</th>
      <th scope="col">Destination</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.posts.map((posts,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>
          <a href ={`/travelpackages/travelpackage/admin/${posts._id}`} style={{textDecoration:'none'}}>
          {posts.packageName}
          </a>
          </td>
      <td>{posts.destination}</td>
      <td>{posts.perperson}</td>
      <td>
        <a className ="btn btn-warning" href ={`/travelpackage/admin/edit/${posts._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>&nbsp;
      
        <a className ="btn btn-danger" href = {`/travelpackage/admin/delete/${posts._id}`} >
        <i className="fas fa-edit"></i>&nbsp;Delete
        </a>
      </td>
    </tr>
    ))}
    
  </tbody>
</table>

 <button className="btn btn-success"><a href="/travelpackage/admin/add" style={{textDecoration:'none' ,color:'white'}} >Add New Package</a></button>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <button className="btn btn-success"><a href="/allbooking" style={{textDecoration:'none' ,color:'white'}} >Booking Details</a></button>
    </div>
  )
}

}