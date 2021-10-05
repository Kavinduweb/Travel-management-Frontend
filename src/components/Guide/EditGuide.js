import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import HeaderAdmin from '../HeaderAdmin'

const EditGuide = () => {
  let history = useHistory();
  const { id } = useParams();
  const [guide, setGuide] = useState({
    name: "",
    address: "",
    language: "",
    email: "",
    phone: "",
    image: ""
  });

  const { name, address, language, email, phone} = guide;
  const onInputChange = e => {
    setGuide({ ...guide, [e.target.name]: e.target.value });
  };

 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/guide/update/${id}`, guide);
    history.push("/guide");
    alert("Guide Updated Successfully!")
  };

  const loadGuide = async () => {
    const result = await axios.get(`http://localhost:8070/guide/${id}`);
    setGuide(result.data.guide);
  };
  useEffect(() => {
    loadGuide();
  }, []);


  return (
  <div>
    <HeaderAdmin/>
    <br/>
    <div className = "infoadmin">
        <section id="edit">
            <div className="container">
                <div className="w-50 mx-auto shadow p-5">
                    <h2 className ="text">Update Guide Details</h2>
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>
                        <label htmlFor="floatingInput" style = {{fontSize:18}}><i class="fa fa-user-plus mr-2" aria-hidden="true"/><strong>Name</strong></label>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Enter Guide Nmae"
                                    name="name"
                                    value={name}
                                    onChange={e=>onInputChange(e)}/>
                            </div>
 
                        <label htmlFor="floatingInput" style = {{fontSize:18}}><i class="fa fa-address-card-o mr-2" aria-hidden="true"/><strong>Address</strong></label>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Guide address"
                                    name="address"
                                    value={address}
                                    onChange={e=>onInputChange(e)}/>
                            </div>
 
                        <label htmlFor="floatingInput" style = {{fontSize:18}}><i class="fa fa-pencil-square-o mr-2" aria-hidden="true"/><strong>Language</strong></label>
                            <div className="form-group">
                                <select name = "language" 
                                    id = "floatingInput" 
                                    className = "form-control" 
                                    placeholder="Guide Language"
                                    value = {language} 
                                    onChange={e=>onInputChange(e)}
                                    required = "required"> 
                                    <option>Select</option>
                                    <option>Sinhala</option>
                                    <option>English</option>
                                    <option>Tamil</option>
                                </select> 
                            </div>

                        <label htmlFor="floatingInput" style = {{fontSize:18}}><i class="fa fa-envelope-o mr-2" aria-hidden="true"/><strong>E-Mail</strong></label>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={e=>onInputChange(e)}/>
                            </div>
 
                        <label htmlFor="floatingInput" style = {{fontSize:18}}><i class="fa fa-address-book-o mr-2" aria-hidden="true"/><strong>Contact Number</strong></label>
                            <div className="form-group">
                                    <input type="text"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxlength = "10"     
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="enter phone"
                                    name="phone"
                                    value={phone}
                                    onChange={e=>onInputChange(e)}/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-dark"><i class="fa fa-cloud-upload mr-2" aria-hidden="true"></i>
                                Submit Details
                            </button>
                    </form>
                </div>
            </div>
        </section>
	  </div> 
  </div>
  );
};


export default EditGuide;