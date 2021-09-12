import React from "react";
import '../Styles/AdminHeader.css'


function HeaderAdmin(){ 

    return(
     <div>

<div class="sidebar-container sidebar-containeradh">
  <div class="sidebar-logo sidebar-logoadh"> 
  <i class="fas fa-plane-departure" aria-hidden="true" style={{fontSize:"70px",marginLeft:"25px",paddingBottom:"20px"}}></i>
  </div>
  <ul class="sidebar-navigation sidebar-navigationadh">
    <li class="header" style={{fontSize:"17px" ,color:"#F1CB64"}}><b>Dream Travelers</b></li>
    <li>
      <a href="/adminhome">
        <i class="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    <li>
      <a href="/travelpackages/admin">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Travel Package
      </a>
    </li>
 
    <li>
      <a href="/adminhotelpackage">
        <i class="fa fa-users" aria-hidden="true"></i> Room Package
      </a>
    </li>
    <li>
      <a href="/activities">
        <i class="fa fa-cog" aria-hidden="true"></i> Activity
      </a>
    </li>
    <li>
      <a href="/guide">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Guide
      </a>
    </li>

    <li>
      <a href="/equipment/admin">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Equipment
      </a>
    </li>
    <li>
      <a href="/feedbacks/admin">
        <i class="fa fa-info-circle" aria-hidden="true"></i> FeedBack
      </a>
    </li>
    <li>
      <a href="/view">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Inquiry
      </a>
    </li>
    <li>
      <a href="/contactus/admin">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Messages
      </a>
    </li>
    <li>
      <a href="/get">
        <i class="fa fa-info-circle" aria-hidden="true"></i> User Management
      </a>
    </li>
    <li>
      <a href="/payment">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Payment
      </a>
    </li>
    
  </ul>
</div>


   
<div class="main_content"   >
        <div class="header" style={{height:"100px"}} >
    
        <div class ="header" >

<div id="hname" > 
    
  <h1 style={{paddingTop:"20px",paddingLeft:"130px"}}> Dream Travelers (pvt) Admin DashBord</h1>
 </div> 


<div id="loginah">
      <a href="/register"  style={{textDecoration:'none' ,color:'rgb(87, 87, 87)'}}  > <i class="fas fa-user-alt"></i>  </a>
</div>

</div>



  </div>  
    </div>




</div>
    )

    
}




export default HeaderAdmin;
  
  