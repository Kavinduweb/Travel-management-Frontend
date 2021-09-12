import React,{Component} from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

 
export default class GuideConfirm extends Component{
 
  constructor(props){
    super(props);

    this.state={
        guide:{}
    };
}


componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/guiderequest/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                guide:res.data.guide
            });

            console.log(this.state.guide);
        }
    });
}

 
  render(){
    const{uname,email,phone,destination,tourdate,noofdates} = this.state.guide;
    return(
      <div>
        <Header/>
      <div className="info">
        <div className="container">
            <br/>
            
            <br/>
               
                   
                                <div className="jumbotron">                   
	                                  <div className="row">
                                   
		                                    <div className="col-sm-10">                                        
			                                    <h6>UName : {uname}</h6> 	
                                                <h6>E-Mail : {email}</h6> 		
                                                <h6>Phone : {phone}</h6> 		
                                                <h6>E-Mail : {destination}</h6> 		
                                                <h6>Tour date : {tourdate}</h6>   
                                                <h6>Number of dates: {noofdates}</h6>                                       		                              
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
                   
                
 
            <br/><br/><br/>

      </div>
    <Footer/>
    </div>
    )
  }
}