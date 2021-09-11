import React from "react";
import "../Styles/HeaderFooter.css";

function Footer() {
  return (
    <div className="mainfooter">
      
       <div className="ftr">
	    <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Visit Us</h4>
            <h6 className="list-unstyled">
              <li>26/D</li>
              <li>Malabe</li>
              <li>Kaduwela</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Terms</h4>
			<h6 className="list-unstyled">
        
              <li>xxxxxxx</li>
              <li>xxxxxxx</li>
              <li>xxxxxxx</li>
            
			</h6>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Services</h4>
            <h6 className="list-unstyled">
              <li>xxxxx</li>
              <li>xxxxx</li>
              <li>xxxxxx</li>
            </h6>
          </div>
        </div>
        
        </div>
        
        <hr  />
		<div className="down">
        <div className="row">
          <p className="col-sm">
			  

        	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
			<a href="#"><i class="fab fa-facebook-f" style={{color:"#adadad"}}></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"><i class="fab fa-twitter" style={{color:"#adadad"}}></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"><i class="fab fa-instagram" style={{color:"#adadad"}}></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br/><br/>
            &copy;{new Date().getFullYear()} Dream Travelers | All rights reserved |
            Terms Of Service | Privacy
            
		
          </p>
        </div>
		</div>
		
      </div>
    
  );
}

export default Footer;
