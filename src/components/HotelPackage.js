import React, {Component } from 'react';
import axios from 'axios';

export default class hotelpackage extends Component{

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
           
          </tr>

        </thead>
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{posts.roomType}</td>
            <td>{posts.details}</td>
            <td>{posts.price}</td>
            <td>{posts.size}</td>
            <td>{posts.maxCapacity}</td>

            <td>
          
            <a className ="btn btn-warning" href ={"/addnewhotelbooking"}>
              <i className="fas fa-edit"></i>FEATURES
            </a>&nbsp;

 
        </td>
           
          </tr>
          ))}
          
        </tbody>
      </table>
      
       
          </div>
        )
    }
}
