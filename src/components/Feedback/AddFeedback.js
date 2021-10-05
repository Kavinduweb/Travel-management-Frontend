import React, { sendLetter, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

const AddFeedback = () => {
  let history = useHistory();

  const [feedback, addFeedback] = useState({
    fullName: "",
    email: "",
    feedBack: "",
  });


  const { fullName, email, feedBack } = feedback;
  const onInputChange = (e) => {
    addFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8070/feedback/add", feedback);
    history.push("/");
    alert(" Successfully added Your Feedback");
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Header />
      <FeedbackContainer>
        <div className="container" className="info">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div
            className="w-75 mx-auto shadow p-5"
            style={{
              background:
                "url(https://emozzy.com/wp-content/uploads/2020/09/Webp.net-compress-image-16.jpg)",
              filter: "drop-shadow(0 0 0.75rem #0A85ED)",
            }}
          >
            <h2 className="text- mb-10">Feedback Form</h2>
            <hr /> <br></br>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="form-group">
                <h6>Full Name</h6>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your Name"
                  name="fullName"
                  value={fullName}
                  required
                  onChange={(e) => onInputChange(e)}/>
                    <Form.Control.Feedback type="invalid">
                Please provide a valid Name.
              </Form.Control.Feedback>
              </div>

              <div class="mb-3 position-relative">
                <label class="form-label" for="inputEmail">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  required
                />
                 <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
              </div>

              <div className="mb-3">
                <label for="Textarea1" className="form-label">
                  Feedback
                </label>

                <textarea
                  className="form-control"
                  id="Textarea1"
                  rows="3"
                  type="text"
                  placeholder="Please let us know how we're doing"
                  name="feedBack"
                  value={feedBack}
                  required
                  onChange={(e) => onInputChange(e)}></textarea>
                    <Form.Control.Feedback type="invalid">
                Please provide a Feedback.
              </Form.Control.Feedback>
              </div>

              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </Form>
          </div>
          <br />
          <br />
          <br />
        </div>
      </FeedbackContainer>
      <Footer />
    </div>
  );
};

export default AddFeedback;

//MAIN CONTAINER
const FeedbackContainer = styled.div`
margin: 1rem auto;
padding: 1rem 2rem;


}
`;
