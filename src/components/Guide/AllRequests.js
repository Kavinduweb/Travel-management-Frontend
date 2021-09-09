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
    axios.get("http://localhost:8070/guiderequest/allrequests").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.allRequests
        });
      
      }
    });
  }
  

  render() {
    return (
    
      <div className="info">
      <div className="container">
      <h2> Request Details</h2>
        <hr/>
         
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Guide Name</th>
        <th scope="col">Guide Language</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Destination</th>
        <th scope="col">Tour Date</th>
        <th scope="col">No of Dates</th>
        <th scope="col">Request Date</th>
       
      </tr>
    </thead>
    <tbody>
      {this.state.posts.map((posts,index)=>(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{posts.guidename}</td>
        <td>{posts.guidelanguage}</td>
        <td>{posts.name}</td>
        <td>{posts.phone}</td>
        <td>{posts.email}</td>
        <td>{posts.destination}</td>
        <td>{posts.tourdate}</td>
        <td>{posts.noofdates}</td>
        <td>{posts.requestdate}</td>
       
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
