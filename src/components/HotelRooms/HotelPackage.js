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


      filterData(posts,searchKey){

        const result = posts.filter((post)=>
          post.roomType.toLowerCase().includes(searchKey)
        )

        this.setState({posts:result})

      }

      handleSearchArea=(e)=>{

        const searchKey=e.currentTarget.value;
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){

            this.filterData(res.data.existingPackage,searchKey)

          }
        });

      }
       

    

    render(){
        return(
          <div className="info">

            <div className="container">
              <div className="row">
                <div className="col-lg-9 mt-2 mb">
                  <h2>Rooms</h2><br></br>
                  </div> 
                  <div className="col-lg-3 mt-2 mb-2">
                    <input
                    className="from-control"
                    type="search"
                    placeholder="search"
                    name="searchQuery"
                    onChange={this.handleSearchArea}>
                    </input>
                  </div>
                </div>
            

            <button className="btn btn-success"><a href="/userhotelbooking" style={{textDecoration:'none', color:'white'}}>My Booking</a></button>
            <br></br>
          <br></br>
          <br></br>  

            <table class="table">
 
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr key={index}>

              <td>{posts.roomType}</td>
              
            <td>
          
            <a className ="btn btn-warning" href ={`/hotelpackagedetails/${posts._id}`}>
              <i className="fas fa-edit"></i>FEATURES
            </a>&nbsp;

 
        </td>
           
          </tr>
          ))}
          
        </tbody>
      </table>
      
       
          </div>

          </div>
        )
    }
}
