import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import HeaderAdmin from "../HeaderAdmin";

export default class AllFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
    };
  }

  componentDidMount() {
    this.retrieveFeedback();
  }

  retrieveFeedback() {
    axios.get("http://localhost:8070/feedback").then((res) => {
      if (res.data.success) {
        this.setState({
          feedback: res.data.existingFeedback,
        });
        console.log(this.state.feedback);
      }
    });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <div className="info">
          <div className="container" style={{ background: "" }}>
            &nbsp;&nbsp;
            <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
            <br />
            <Row xs={1} md={1} className="g-4" id="by" class="rounded">
              {this.state.feedback.map((feedback, idx) => (
                <div
                  className="card"
                  style={{
                    width: "90%",
                    backgroundImage:
                      "linear-gradient( 89.9deg,  rgba(178,253,238,0.96) -8.1%, rgba(207,244,254,1) 26.3%, rgba(207,244,254,0.48) 47.5%, rgba(254,219,243,0.63) 61.5%, rgba(254,219,243,1) 78.7%, rgba(254,207,210,1) 109.2% )",
                    borderRadius: "15px 50px 30px",
                  }}
                >
                  <div className="card-body">
                    <h3 className="card-title">{feedback.fullName}</h3>
                    <h5 className="card-subtitle mb-2 text-muted">
                      {feedback.email}
                    </h5>
                    <br />
                    <p className="card-text">{feedback.feedBack}</p>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
