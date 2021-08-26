import React,{Component} from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import tp1 from '../../Images/tp1.jpg'



export default class AllPackages extends Component{

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

filterData(posts,searchkey){
  const result = posts.filter((post) =>
  post.packageName.toLowerCase().includes(searchkey)||
  post.destination.toLowerCase().includes(searchkey) ||
  post.perperson.toLowerCase().includes(searchkey)
  )
  this.setState({posts:result})
}

handleSearchArea=(e)=>{
  const searchkey = e.currentTarget.value;

  axios.get("http://localhost:8070/travelpackages").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPackage,searchkey)
    }
  });
}

render(){
  return(
    <div className="bodytravelpackage" id="bbimg">
    <div >
      <br/><br/>

<div className="rightsearch">
  
      <div class="input-group" >
  <div class="form-outline">

    <input 
    id="search-input" 
    type="search" 
    id="form1" 
    class="form-control" 
    placeholder="Search Package"
    onChange={this.handleSearchArea}  />
  </div>

  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>

</div>
</div>

       

<Row xs={1} md={3} className="g-4" id="by" class="rounded" >
  {this.state.posts.map((posts, idx) => (
   
    <Col >
  
      <Card >
      <div className="cdbody">
        <Card.Img variant="top" src={tp1} id="cardimg" />
        <Card.Body>
        
          <Card.Title> {idx+1}. &nbsp;{posts.packageName}<br/><br/>
          </Card.Title>
          <Card.Text>
       
          {posts.destination}<br/>
         {posts.perperson}
       <button type="button" class="btn btn-primary" id="cardbtn">

     <a href ={`/travelpackages/travelpackage/${posts._id}`} style={{textDecoration:'none',color:'white'}}> View Details</a></button>
 
          </Card.Text>
        </Card.Body>
        </div>
      </Card>

    </Col>
   
  ))}
</Row>



<br/><br/><br/><br/><br/>


</div>
 
    </div>
  )
}

}