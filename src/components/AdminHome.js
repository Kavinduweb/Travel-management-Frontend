import React from "react";
import '../Styles/HeaderFooter.css'
import HeaderAdmin from './HeaderAdmin'
import '../Styles/AdminHeader.css'


function AdminHome(){

    return(

<div>
  <HeaderAdmin/>
  
 
<div style={{backgroundImage:"url('https://www.freakytravel.com/wp-content/uploads/hiker-ocean-extreme.jpg')"}}>
        
        
<div id="bodyadd">
           <div className="infoadmin">
            <div >
                


      
  <div class="container">
    <div class="row">
      
      <div class="col-lg-10 col-xl-9 mx-auto">
        
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            
          </div>
          <div class="card-body p-4 p-sm-5">
    
           <center> <h1>Admin Panel DashBord</h1></center>
           <hr class="my-4" />




          <div class="d-flex flex-row align-items-center mb-5">
    
              <div class="form-outline mb-2 ">
             
              <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/get" style={{textDecoration:'none' ,color:'black'}}> User Management </a></button>
     
             </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              <div class="form-outline mb-2 ">
           
              <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/travelpackages/admin" style={{textDecoration:'none' ,color:'black'}} >Travel Package</a></button>
             </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

             <div class="form-outline mb-2 ">
           
             <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/adminhotelpackage" style={{textDecoration:'none' ,color:'black'}} >Hotel Package</a></button>
          </div>

          </div>
          <div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/activities" style={{textDecoration:'none' ,color:'black'}} >Activity</a></button>
            
   </div>&nbsp;&nbsp;&nbsp;&nbsp;
   
    <div class="form-outline mb-2 ">
 
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/equipment/admin" style={{textDecoration:'none' ,color:'black'}} >Equipment</a></button>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;

   <div class="form-outline mb-2 ">
 
   <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/guide" style={{textDecoration:'none' ,color:'black'}} >Guide Management</a></button>
             </div>&nbsp;&nbsp;&nbsp;&nbsp;

             <div class="form-outline mb-2 ">
 
             <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/payment" style={{textDecoration:'none' ,color:'black'}} >Payment</a></button>
                 </div>
</div>



<div class="d-flex flex-row align-items-center mb-5">
    
    <div class="form-outline mb-2 ">
   
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/feedbacks/admin" style={{textDecoration:'none' ,color:'black'}} >FeedBack Messages</a></button>
                    
   </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <div class="form-outline mb-2 ">
  
    <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/contactus/admin" style={{textDecoration:'none' ,color:'black'}} >Contact Us Messages</a></button>
                     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/adView" style={{textDecoration:'none' ,color:'black'}} >Inquiry</a></button>
              </div>

   <div class="form-outline mb-2 ">
 
   <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/view" style={{textDecoration:'none' ,color:'black'}} >Inquiry</a></button>
                      </div>


</div>
                <hr class="my-4"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  



   
   
</div></div></div>


  
</div></div>

    )

    
}

export default AdminHome;