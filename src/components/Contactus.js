
import React from 'react'
import '../Styles/AboutUS.css'

const ContactUs = ()=>{

    
    return(
        <div className="bodycn">
            <div className="info">



            <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
                CONTACT US
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form>
                        <div class="form-group" id="form-groupabc">
                            <label class="form-control-label">YOUR NAME</label>
                           <input type="text" class="form-control" id="inputabc"/>
                        </div>
                        <div class="form-group" id="form-groupabc">
                            <label class="form-control-label">MESSAGE</label>
                            
                            <textarea class="form-control" id="inputabc" rows="5"></textarea>
                        </div>

                        <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                            </div>
                            <div class="col-lg-6 login-btm login-button">
                                <button type="submit" class="btn btn-outline-primary">SEND</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>


<br/><br/><br/>



            </div>
</div></div>

    )

};

export default ContactUs;




















