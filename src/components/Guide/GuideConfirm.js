import React,{Component} from 'react'
import axios from 'axios';

 
export default class GuideConfirm extends Component{
 
    constructor(props){
      super(props);
      this.state={
      guide:[]
      };
    }
 
  componentDidMount(){
    this.retrieveGuide();
  }
 
  retrieveGuide(){
    axios.get("http://localhost:8070/guide").then(res =>{
      if(res.data.success){
        this.setState({
          guide:res.data.existingGuide
        });
        console.log(this.state.guide);
      }
    });
  }
 
  
  onDelete = (id) => {
    axios.delete(`http://localhost:8070/guide/handle/delete/${id}`).then((res) => {
      alert("Guide Details Deleted SuccessFully!");
      this.retrieveGuide();
    })
  }
 
  

 
  render(){

    return(
      <div className="info">
        <div className="container">
            <br/>
            
            <br/>
               
                    {this.state.guide.map((guide,index)=>(
                        <div key={index}>
                            <div scope="row">{index+1}</div>
                                <div className="jumbotron">                   
	                                  <div className="row">
                                   
		                                    <div className="col-sm-10">                                        
			                                    <h6>Name : {guide.name}</h6> 	
                                                <h6>Address : {guide.address}</h6> 		
                                                <h6>Language : {guide.language}</h6> 		
                                                <h6>E-Mail : {guide.email}</h6> 		
                                                <h6>Contact Number : {guide.phone}</h6>                                        		                              
		                                    </div>
	                                  </div>
                                    <br/>
	                                  <div className="row">
		                                    <div className="col-sm-2">
			                                      <a href="" className="btn btn-outline-success">Confirm</a> 
		                                    </div> 

                                        <div className="col-sm-2">
			                                      <a href="" className="btn btn-outline-success">Reject</a> 
		                                    </div> 
	                                  </div>	
                                    <br/>
                              </div> 
                        </div>
                    ))}
                
 
            <br/><br/><br/>

      </div>
    </div>
    )
  }
}