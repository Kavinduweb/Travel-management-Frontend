import React,{Component} from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default class CardItemsT extends Component{

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


filterData(posts,searchkey){
  const result = posts.filter((post) =>
  post.name.toLowerCase().includes(searchkey)||
  post.name.toUpperCase().includes(searchkey)

  )
  this.setState({posts:result})
}

handleSearchArea=(e)=>{
  const searchkey = e.currentTarget.value;

  axios.get("http://localhost:8070/equipment").then(res =>{
          this.filterData(res.data,searchkey)
    })
}

render(){
  return(
    <div className="infotr">
    <div className="bodytravelpackage" id="bbimg">
    <div >
      <br/>
  
<div className="rightsearch">

      <div class="input-group" >
  <div class="form-outline">

    <input 
    id="search-input" 
    type="search" 
    id="form1" 
    class="form-control" 
    placeholder="Search Equipment"
    onChange={this.handleSearchArea}  />
  </div>

  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>

</div>
</div>

       
<Row xs={1} md={3} className="g-4" id="by" class="rounded" >
{this.state.posts.map((equipment, idx) => (
   
    <Col >
    <div class="card h-1000">
  
      <Card >
      <div className="cdbody">
        <Card.Img variant="top" src={`/uploads/${equipment.image}`} class="img-fluid rounded-start" style={{height:"250px"}} alt="..." id="cardimg" />
        <Card.Body>
        
          <Card.Title> {equipment.name}<br/>
          </Card.Title>
          <Card.Text>
       
          {equipment.description}<br/> <br/>
          <div class="card-footer" >


<ul>
      <li ><i class="fas fa-tag "></i>Rs.&nbsp;{equipment.price}
      
      <button type="button" class="btn btn-primary" style={{marginInlineStart:"50%", width:"110px"}}>

      <a href ={`/payment/add-equipment/${equipment._id}`} style={{textDecoration:'none',color:'white'}}> BUY</a></button>
      
      </li>
       
    </ul>

</div>
 
          </Card.Text>
        </Card.Body>
        </div>

      </Card>
    </div>
 
    </Col>
   
  ))}
</Row>


<br/><br/><br/><br/><br/>


</div>
 
    </div>
    </div>
  )
}

}
