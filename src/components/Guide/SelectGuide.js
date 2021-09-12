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
                    
                            <div className="about-container">
                                <img src = {`/uploads/${guide.guideImage}`} alt = "..."/>    
                                    <div className="about-text">
                                        <br/>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p>Name</p>
                                            </div>
                                            <div className="col">
                                                {guide.name}
                                            </div>
                                        </div>
                                        

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p>Address</p>
                                            </div>
                                            <div className="col">
                                                {guide.address}
                                            </div>
                                        </div>
                                       

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p>Language</p>
                                            </div>
                                            <div className="col">
                                                {guide.language}
                                            </div>
                                        </div>
                                        

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p>E-Mail</p>
                                            </div>
                                            <div className="col">
                                                {guide.email}
                                            </div>
                                        </div>
                                        

                                        <div className="row">
                                            <div className="col-sm-4">
                                               <p>Contact Number</p>
                                            </div>
                                            <div className="col">
                                                {guide.phone}
                                            </div>
                                        </div>
                                        <br/>
                                        <button className="btn btn-secondary"><a href={`/guide/request/${guide._id}`} style={{textDecoration:'none' ,color:'white'}}>Send Request</a></button>
                                    </div>
                                </div>
                                                                         
                        ))}                                           
                        <br/><br/><br/>         
        </div>
      </div>
    )
  }
}