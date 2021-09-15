import React,{Component} from 'react'
import axios from 'axios';
import "../../Styles/Guide.css";
import Header from '../Header';
import Footer from '../Footer';

 
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
      <div>
        <Header/>
            <div className="info">
                <div className="container">
                    <br/>
                    <div>
                        <div className="input-group" style={{marginLeft:1070}} >
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

                    <hr/>
                    {this.state.guide.map((guide,index)=>(
                    <section id = "select">
                        <div class="rt-container">
                            <div class="col-rt-12">
                                <div class="Scriptcontent">
                                    <div class="student-profile py-4">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="card-c shadow-sm">
                                                        <div class="card-header bg-transparent text-center">
                                                            <img class="profile_img" src = {`/uploads/${guide.guideImage}`} alt = "..." 
                                                            style = {{width:200, height:200}}/> 
                                                            <h4>{guide.name}</h4>
                                                            <h5 class="mb-0"><strong class="pr-1">Travel Guide</strong></h5>
                                                        </div>
                                                        <div class="card-body">
                                                            <center><button className="btn btn-success"><i class="fa fa-share-square-o mr-2" aria-hidden="true"></i>
                                                            <a href={`/guide/request/${guide._id}`} style={{textDecoration:'none' ,color:'white'}}>Send Request</a></button></center>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="card shadow-sm">
                                                        <div class="card-header bg-transparent border-0">
                                                          <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Guide Information</h3>
                                                        </div>
                                                            <div class="card-body pt-0">
                                                                <table class="table table-bordered">
                                                                    <tr>
                                                                      <th width="30%">Name</th>
                                                                      <td width="2%">:</td>
                                                                      <td>{guide.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                      <th width="30%">Address</th>
                                                                      <td width="2%">:</td>
                                                                      <td>{guide.address}</td>
                                                                    </tr>
                                                                    <tr>
                                                                      <th width="30%">Language</th>
                                                                      <td width="2%">:</td>
                                                                      <td>{guide.language}</td>
                                                                    </tr>
                                                                    <tr>
                                                                      <th width="30%">E-Mail</th>
                                                                      <td width="2%">:</td>
                                                                      <td>{guide.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                      <th width="30%">Contact Number</th>
                                                                      <td width="2%">:</td>
                                                                      <td>{guide.phone}</td>
                                                                    </tr>
                                                                  </table>
                                                                </div>
                                                            </div>                                                              
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
    		                        </div>
		                        </div>
                        </div>
                    </section>                                                                              
                        ))}
                                                                
                        <br/><br/><br/>         
        </div>
      </div>
      <Footer/>
      </div>
      
    )
  }
}