import React from "react";
import '../Styles/HeaderFooter.css'

function Header(){

    return(

<div class="wrapper">
    <div class="sidebar">
       <h1>  <i class="fas fa-plane-departure"> </i></h1>
        <ul>
            <li><a href="#"  style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#" style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-user"></i>Travel Package</a></li>
            <li><a href="#" style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-address-card"></i>Room Package</a></li>
            <li><a href="#" style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-project-diagram"></i>Activity</a></li>
            <li><a href="#" style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-blog"></i>Equipment</a></li>
            <li><a href="#" style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-address-book"></i>FeedBack</a></li>
            <li><a href="#"style={{textDecoration:'none' ,color:'white'}}><i class="fas fa-map-pin"></i>Inquiry</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    
    <div class="main_content">
        <div class="header">
    
        <div class ="header">

<div id="hname">
    
  <h1> Dream Travelers (pvt) </h1>
 </div> 


<div id="login">
      <a href="#"  style={{textDecoration:'none' ,color:'rgb(87, 87, 87)'}}  > <i class="fas fa-user-alt"></i> </a>
</div>

</div>

<ul class="menupp" style={{width:'100%'}}>
    <li className="menupp"><a></a></li>
    <li className="menupp"><a></a></li>
    
  <li class="menupp"><a class="actively" href="home.html">About Us</a></li>
  <li class="menupp"><a href="#">Views</a></li>
  <li class="menupp"><a href="#">Contact Us</a></li>
  <li class="menupp"><a href="equpmentpage.html">Gallery</a> </li>

  </ul>

  </div>  
    </div>
</div>

    )

    
}

export default Header;