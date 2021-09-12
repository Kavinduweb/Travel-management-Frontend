import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";
import HeaderAdmin from '../HeaderAdmin'



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
      <div>
        <HeaderAdmin/>
        <div className="info">
             <ReactToPrint
          trigger={() =>
            <button type="button" 
            class="btn btn-primary" 
            style={{marginLeft:1336}}>
            <i class="fas fa-print mr-2"></i>Print this out!
            </button> 
          }

          content={(Component) => this.componentRef}
        />
            <div className="container" ref={(Component) => (this.componentRef = Component)}>
                <h2><b><center>Requests Details Of Travellers</center></b></h2>
            <section id="report">
              <table class="table">
                <thead class="thead">
                  <tr>
                    <th scope="col">ID</th>
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
                            <td>{posts.uname}</td>
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
            </section>
            </div>
        </div>
        </div>
    );
  }
}



export default ComponentToPrint;
