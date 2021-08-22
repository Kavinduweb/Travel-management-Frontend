import React, {Component } from 'react';
import axios from 'axios';

export default class AdminHotelBooking extends Component{

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
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPackage
            });
          console.log(this.state.hotelpackage);
          }
        });
      } 


      onDelete=(id)=>{

        axios.delete(`http://localhost:8070/hotelpackage/delete/${id}`).then((res)=>{
          alert("Delete Successfully");
          this.retrievePosts();
        })
      }
      

    

    render(){
        return(
            <div className="container">
              <p>Rooms</p>
               
              <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Room Type</th>
              <th scope="col">Details</th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
              <th scope="col">Max Capacity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                  <a href ={`/adminhotelpackagedetails/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.roomType}
                  </a>
                  </td>
              <td>{posts.details}</td>
              <td>{posts.price}</td>
              <td>{posts.size}</td>
              <td>{posts.maxCapacity}</td>
              <td>
                <a className ="btn btn-warning" href ={`/adminedithotelpackage/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>&nbsp;
              
                <a className ="btn btn-danger" href ="#" onClick={()=>this.onDelete(posts._id)} >
                <i className="fas fa-edit"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
        
         <button className="btn btn-success"><a href="/adminaddhotelpackage" style={{textDecoration:'none' ,color:'white'}} >Add New Package</a></button>
        
            </div>
          )
    }
}
