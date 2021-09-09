import React, {Component } from 'react';
import axios from 'axios';
import hotelimg from '../../Images/simple-house-logo.png'
import luxurious from '../../Images/aa.jpg'
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../../Styles/templatemo-style.css'

export default class hotelpackage extends Component{

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
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPackage
            });
          console.log(this.state.hotelpackage);
          }
        });
      } 


      filterData(posts,searchKey){

        const result = posts.filter((post)=>
          post.roomType.toLowerCase().includes(searchKey)
        )

        this.setState({posts:result})

      }

      handleSearchArea=(e)=>{

        const searchKey=e.currentTarget.value;
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){

            this.filterData(res.data.existingPackage,searchKey)

          }
        });

      }
       

    

    render(){
        return(
          <div className="info">
            



			<div class="parallax-window" data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
      <img src={luxurious} alt="Logo" class="shimg" />
				<div class="tm-header">
					<div class="tm-header-inner">
            <div class="row">
						<div class="col-md-6 col-12">
							<img src={hotelimg} alt="Logo" class="tm-site-logo" /> 
							<div class="tm-site-text-box">
								<h1 class="tm-site-title">Rooms</h1>
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                    className="from-control"
                    type="search"
                    placeholder=" What are you looking for?"
                    name="searchQuery"
                    onChange={this.handleSearchArea}>
                    </input>
                  </div>	
							</div>
						</div>
						<nav class="col-md-6 col-12 tm-nav">
							<ul class="tm-nav-ul">
								<li class="tm-nav-li"><a href ={"/hotelpackage"} class="tm-nav-link active">Rooms</a></li>
								<li class="tm-nav-li"><a href ={"/userhotelbooking"} class="tm-nav-link">My Booking</a></li>
							</ul>
						</nav>	
					</div>
          </div>
				</div>
			</div>




            <div className="container">
              <br></br>
              <br></br>
            
            
                    <Row xs={1} md={3} className="g-4" id="by" class="rounded" >
          {this.state.posts.map((posts) => (
          <Col >
          <Card class="crdboder" >
          <div className="hotelcontainer">
          <Card.Img className="packageimg" variant="top" src={`/uploads/${posts.packageImage}`} id="cardimg" />
          <Card.Body>

          <Card.Title class="tm-gallery-title">{posts.roomType}
          </Card.Title>
          <Card.Text>
          <div className=""><table>
  <tr>
    <td>Per Day: {posts.price}<br></br>
    Max Capacity: {posts.maxCapacity}</td>
    <td>          <button type="button" class="btn btn-primary" id="crdbtn">

          <a href ={`/hotelpackagedetails/${posts._id}`} style={{textDecoration:'none',color:'white'}}>Features</a></button></td>
  </tr>
</table>
          
</div>
          
          </Card.Text>
          </Card.Body>
          </div>
          </Card>

          </Col>
          ))}
          </Row>

      
       
          </div>

          </div>
        )
    }
}
