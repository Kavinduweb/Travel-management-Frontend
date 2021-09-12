import React,{Component} from 'react'
import axios from 'axios';
import "../../Styles/Guide.css";
 
export default class AllGuideDetails extends Component{
 
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
    // eslint-disable-next-line no-restricted-globals
   if(confirm("Are you Sure you want to delete this?")){
    axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res) => {
      alert("Guide Details Deleted SuccessFully!");
      this.retrieveGuide();
    })
   }
  }
 
  filterData(guide,searchkey){
    const result = guide.filter((guide) =>
      guide.name.toLowerCase().includes(searchkey)
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
      <div className = "info">
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
            
            <button id="search-button" type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>

          </div>
        </div>

        <hr/>
        <br/>
        <button type="button" className="btn btn-dark btn-m mr-2">
          <a href="/guide/add" style={{textDecoration:'none' ,color:'white'}} >+ Add New Guide</a>
        </button>

        <button type="button" style={{marginLeft:986}} className="btn btn-secondary">
          <a href="/guide/allrequests" style={{textDecoration:'none' ,color:'white'}} >Generate Report</a>
        </button>
 
        <br/><br/>
  
       <section id="team">
        <table className="table table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Language</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.guide.map((guide,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                  <td className="text-center">
                    <img src = {`/uploads/${guide.guideImage}`} alt = " " style = {{width : "40%" , minHeight : "30%"}}/>
                  </td>
                  <td>{guide.name}</td>
                  <td>{guide.address}</td>
                  <td>{guide.language}</td>
                  <td>{guide.email}</td>
                  <td>{guide.phone}</td>
                  <td>{guide.username}</td>
                  <td>{guide.password}</td>
                  
                  <td>
                    <a href={`/guide/edit/${guide._id}`} type="button">
                    <button type="button" style={{width:73}} class="btn btn-dark">Edit</button>
                    </a>
                    <br/><br/>
                    <a href="/guide" onClick={()=>this.onDelete(guide._id)} type="button">
                    <button type="button" class="btn btn-danger">Delete</button>
                    </a>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
        <br/><br/><br/>

      </div>
      </div>
    )
  }
}