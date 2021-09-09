import React,{Component} from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import tp1 from '../../Images/z5.jpg'
import '../../Styles/TravelPackage.css'


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
    placeholder="Search Package"
    onChange={this.handleSearchArea}  />
  </div>

  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>

</div>
</div>

       

<Row xs={1} md={1} className="g-4" id="by" class="rounded" >
  {this.state.posts.map((posts, idx) => (
   
   

	<div class="container py-1">

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={`/uploads/${posts.packageImage}`} alt="..."  />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="#"> {idx+1}. &nbsp;{posts.packageName}</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>{posts.date}
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{posts.discription}</div>
               <br/>
                {posts.destination}
                
                <ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>PP&nbsp;{posts.perperson}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>{posts.noofdays}&nbsp;{posts.noofnights}</li>
					<li class="tag__item play blue">
						<a href="#"><i class="fas fa-car mr-2"></i>{posts.vehical}</a>
					</li>
             <li >
                    <button type="button" class="btn btn-primary" id="cardbtn2">

         <a href ={`/travelpackages/travelpackage/${posts._id}`} style={{textDecoration:'none',color:'white'}}> View Details</a></button>
         </li>
				</ul>
			</div>
		</article>
		
	</div>





  ))}
</Row>



<br/><br/><br/><br/><br/>


</div>
 
    </div>
    </div>
  )
}

}