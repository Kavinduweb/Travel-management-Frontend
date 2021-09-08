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
    axios.get("http://localhost:8070/equipment").then(res =>{
        this.setState({
          posts:res.data
        });
    });
  }
  
  render() {
    return (
    
      <div className="info">
      <div className="container">
        <h1> Package Booking Details</h1>
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.name}</td>
        <td>{posts.description}</td>
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
          trigger={() => <button style={{marginLeft:230}}>Print this out!</button> }
          
          content={(Component) => this.componentRef}
        />

        <ComponentToPrint  ref={(Component) => (this.componentRef = Component)}/>
      </div>
    );
  }
}
export default Example;
