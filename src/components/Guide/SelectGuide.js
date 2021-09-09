import React,{Component} from 'react'
import axios from 'axios';
import "../../Styles/Guide.css";

 
export default class SelectGuide extends Component{
 
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
    axios.delete(`http://localhost:8070/guide/all/delete/${id}`).then((res) => {
      alert("Guide Details Deleted SuccessFully!");
      this.retrieveGuide();
    })
  }
 
  filterData(guide,searchkey){
    const result = guide.filter((guide) =>
      guide.language.toLowerCase().includes(searchkey)
    )
    this.setState({guide:result})
  }
 
  handleSearchArea=(e)=>{
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8070/guide").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingGuide,searchkey)
      }
    });
  }


 
  render(){

    return(
      <div className="info">
        <div className="container">
            <br/>
            <div>
                <div className="input-group" >
                    <div className="form-outline">
                        <input 
                        id="search-input" 
                        type="search" 
                        id="form1" 
                        className="form-control" 
                        placeholder="Search Guide"
                        onChange={this.handleSearchArea}  />
                    </div>
 
                    <button id="search-button" 
                            type="button" 
                            className="btn btn-primary">
                            <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <br/>
 
                    {this.state.guide.map((guide,index)=>(
                        <div key={index}>
                            <div scope="row">{index+1}</div>
                                <div className="jumbotron">                   
                                    <div class="container">
	                                      <div class="main-body">
		                                        <div class="row gutters-sm">
			                                          <div class="col-md-4 mb-3">
				                                            <div class="card">
					                                              <div class="card-body">
						                                                <div class="d-flex flex-column align-items-center text-center">
                                                                <img src = {`/uploads/${guide.guideImage}`} alt = "..." style = {{width : "40%" , minHeight : "40%"}}/>
                                                                <div class="mt-3">
                                                                    <h4>{guide.name}</h4>
                                                                    <p class="text-secondary mb-1">TOURIST GUIDE</p>
                                                                    <p class="text-muted font-size-sm">{guide.address}</p>
                                                                    <button class="btn btn-primary"><a href={`/guide/request/${guide._id}`} style={{textDecoration:'none' ,color:'white'}}>Send Request</a></button>                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div class="col-md-8">
                                                      <div class="card mb-3">
                                                          <div class="card-body">

                                                              <div class="row">
                                                                  <div class="col-sm-3">
                                                                      <h6 class="mb-0">Name</h6>
                                                                  </div>
                                                                  <div class="col-sm-9 text-secondary">
			                                                                {guide.name}
                                                                  </div>
                                                              </div>

                                                              <hr/>

                                                              <div class="row">
                                                                  <div class="col-sm-3">
                                                                      <h6 class="mb-0">Address</h6>
                                                                  </div>
                                                                  <div class="col-sm-9 text-secondary">
			                                                                {guide.address}
                                                                  </div>
                                                              </div>

                                                              <hr/>

                                                              <div class="row">
                                                                  <div class="col-sm-3">
                                                                      <h6 class="mb-0">Language</h6>
                                                                  </div>
                                                                  <div class="col-sm-9 text-secondary">
		                                                                  {guide.language}
                                                                  </div>
                                                              </div>
                                                              
                                                              <hr/>

                                                              <div class="row">
                                                                  <div class="col-sm-3">
                                                                      <h6 class="mb-0">E-Mail</h6>
                                                                  </div>
                                                                  <div class="col-sm-9 text-secondary">
			                                                                {guide.email}
                                                                  </div>
                                                              </div>

                                                              <hr/>

                                                              <div class="row">
                                                                  <div class="col-sm-3">
                                                                      <h6 class="mb-0">Contact Number</h6>
                                                                  </div>
                                                                  <div class="col-sm-9 text-secondary">
			                                                                {guide.phone}
                                                                  </div>
                                                              </div>
                                                              <br/>
                                                              
                                                          </div>
                                                      </div>         
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                    ))}
                    
                    <br/><br/><br/>
        </div>
        </div>
    )
  }
}