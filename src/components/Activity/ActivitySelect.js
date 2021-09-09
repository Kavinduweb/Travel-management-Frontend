import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";


class ComponentToPrint extends React.Component{

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
    axios.get("http://localhost:8070/activityselect/allselects").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.allselects
        });
      console.log(this.state.allselects);
      }
    });
  }
  

  render() {
    return (
    
      <div className="info">
      <div className="container">
      <h2> Activity Select Details</h2>
        <hr/>
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Activity Name</th>
        <th scope="col">Price</th>
        <th scope="col">Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Content</th>
        <th scope="col">Booking Date</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.aName}</td>
        <td>{posts.aprice}</td>
        <td>{posts.name}</td>
        <td>{posts.phone}</td>
        <td>{posts.content}</td>
        <td>{posts.date}</td>
       
      </tr>
  
      ))}
      
    </tbody>
  </table>
  
  
   </div>
      </div>
  



    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() =>
            
          
            <button type="button" class="btn btn-secondary" style={{marginLeft:1100}}><i class="fas fa-print mr-2"></i>Print this out!</button> }
          
          content={(Component) => this.componentRef}
        />
     
        <ComponentToPrint ref={(Component) => (this.componentRef = Component)}  />
      </div>
    );
  }
}

export default Example;
