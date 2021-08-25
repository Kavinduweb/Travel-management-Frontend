import React,{Component} from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';
 
export default class AllFeedback extends Component{
 
constructor(props){
  super(props);
  this.state={
    feedback:[]
  };
}
 
componentDidMount(){
  this.retrieveFeedback();
}
 
retrieveFeedback(){
  axios.get("http://localhost:8070/feedback").then(res =>{
    if(res.data.success){
      this.setState({
        feedback:res.data.existingFeedback
      });
    console.log(this.state.feedback);
    }
  });
}
 
render(){
  return(
    <div className="container">
 <h1 style={{textAlign:"center"}}>Feedbacks</h1>
 <br/>
<Row xs={1} md={1} className="g-4" id="by" class="rounded" >
  {this.state.feedback.map((feedback, idx) => (
   
 
<div class="card" style={{width: "90%"}}>
  <div class="card-body">
    <h3 class="card-title">{feedback.fullName}</h3>
    <h5 class="card-subtitle mb-2 text-muted">{feedback.email}</h5>
<br/>
    <p class="card-text">{feedback.feedBack}</p>
  </div>
</div>
 
))}
</Row>
 
    </div>
  )
}
 
}