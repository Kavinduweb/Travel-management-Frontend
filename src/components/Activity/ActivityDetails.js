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
    axios.get("http://localhost:8070/activities").then(res =>{
        this.setState({
          posts:res.data
        });
      
    });
  }
  

  render() {
    return (
    
      <div className="info">
      <div className="container">
      <h2> Activity Details</h2>
        <hr/>
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Activity Name</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.aname}</td>
        <td>{posts.category}</td>
        <td>{posts.price}</td>
       
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