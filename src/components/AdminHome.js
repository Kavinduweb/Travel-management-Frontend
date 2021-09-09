import React from "react";
import '../Styles/HeaderFooter.css'

function AdminHome(){

    return(

<div>
        
<div id="bodyadd">
           <div className="info">
            <div >
                


            <body>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
           
          </div>
          <div class="card-body p-4 p-sm-5">
            <h1 class="card-title text-center"> Admin Home</h1>

            <br/>
            <form>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/get" style={{textDecoration:'none' ,color:'black'}}> User Management </a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/travelpackages/admin" style={{textDecoration:'none' ,color:'black'}} >Travel Package</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/adminhotelbooking" style={{textDecoration:'none' ,color:'black'}} >Hotel Package</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/activities" style={{textDecoration:'none' ,color:'black'}} >Activity</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/equipment/admin" style={{textDecoration:'none' ,color:'black'}} >Equipment</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/guide" style={{textDecoration:'none' ,color:'black'}} >Guide</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/feedbacks/admin" style={{textDecoration:'none' ,color:'black'}} >FeedBack</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="/contactus/admin" style={{textDecoration:'none' ,color:'black'}} >Contact Us Messages</a></button>
              </div>

              <div class="d-grid mb-4">
                <button  class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase" type="submit">
                <a href="#" style={{textDecoration:'none' ,color:'black'}} >Inquiry</a></button>
              </div>

             

              <hr class="my-4"/>

             

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</body>


   
   
</div></div></div>


  
</div>

    )

    
}

export default AdminHome;