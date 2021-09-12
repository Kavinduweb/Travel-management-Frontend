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

  const { name, address, language, email, phone, guideImage} = guide;
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
    <div className = "infoadmin">
      <section id="edit">
      <div className="container">
          <div className="w-50 mx-auto shadow p-5">
              <h2 className ="text- mb-10"><b>Update Guide Details</b></h2>
              <hr/>
              <form onSubmit={e => onSubmit(e)}>
                  <label htmlFor="floatingInput"><strong>Name</strong></label>
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
 
                  <label htmlFor="floatingInput"><strong>Address</strong></label>
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
 
                  <label htmlFor="floatingInput"><strong>Language</strong></label>
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

                  <label htmlFor="floatingInput"><strong>E-Mail</strong></label>
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
 
                  <label htmlFor="floatingInput"><strong>Contact Number</strong></label>
                  <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="enter phone"
                      name="phone"
                      value={phone}
                      onChange={e=>onInputChange(e)}/>
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-dark">Submit Details</button>
 
              </form>
          </div>
      </div>
      </section>
	</div> 
  </div>
  );
};


export default EditGuide;