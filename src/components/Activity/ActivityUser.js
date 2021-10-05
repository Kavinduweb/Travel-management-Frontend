import React, { useReducer, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

const ActivitySelect = (props) => {
  const [tactivity, viewActivity] = useState({
    aname: "",
    category: "",
    mindescription: "",
    description: "",
    price: "",
  });

  const { id } = useParams();

  const loadPackage = async () => {
    const res = await axios.get(`http://localhost:8070/activities/${id}`);
    viewActivity(res.data);
  };
  useEffect(() => {
    loadPackage();
  });

  let history = useHistory();

  const [post, addPost] = useState({
    aName: "",
    aprice: "",
    name: "",
    phone: "",
    content: "",
  });
  const { aName, aprice, name, phone, content } = post;

  const onInputChange = (e) => {
    addPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { aName, aprice, name, phone, content } = post;
    const { aname, price } = tactivity;

    const data = {
      aName: aname,
      aprice: price,
      name: name,
      phone: phone,
      content: content,
    };

    await axios.post("http://localhost:8070/activityselect/add", data);
    alert("Activity Select Successfull. Click Ok to Pay");
    history.push(`/payment/add-activity/${props.match.params.id}`);
  };

  const { aname, price } = tactivity;

  const userInfo = localStorage.getItem("userInfo");

  if (userInfo == null) {
    alert("You are not Authorized User. Please sign in first.");

    window.location.replace("/register");
  }

  return (
    <div>
      <Header />
      <div className="infotr">
        <div className="body" style={{ backgroundSize: "cover" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div
            className="bodybb"
            style={{
              background: "linear-gradient(90deg, #e2eafc 0%, #b6ccfe 100%)",
            }}
          >
            <div className="container">
              <div className="w-70 mx-auto shadow p-5">
                <div className="bodycc">
                  <h2 className="text- mb-10" style={{ color: "#1b3b6f" }}>
                    <b>Select Activity</b>
                  </h2>
                </div>
                <hr />

                <form onSubmit={(e) => onSubmit(e)}>
                  <div class="row">
                    <div class="col">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="basic-addon1"
                            style={{
                              backgroundColor: "hsl(0,0%,0%,0.3)",
                              color: "white",
                            }}
                          >
                            Activity Name
                          </span>
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          name="aName"
                          value={aname}
                          onChange={(e) => onInputChange(e)}
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="basic-addon1"
                            style={{
                              backgroundColor: "hsl(0,0%,0%,0.3)",
                              color: "white",
                            }}
                          >
                            Price
                          </span>
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          name="aprice"
                          value={price}
                          onChange={(e) => onInputChange(e)}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      name="name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Phone</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Quantity</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Qun:"
                      name="content"
                      value={content}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>
                  <br />

                  <button
                    type="submit"
                    class="btn btn-block"
                    style={{ background: "#9c89b8" }}
                  >
                    {" "}
                    Select Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivitySelect;
