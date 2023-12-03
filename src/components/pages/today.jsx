/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import TodoApp from "../todoapp";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TodayTask = () => {
  const [todoAppContainers] = useState([]);

  return (
    <>
      <p className="lead" style={{ color: "#B6EADA" }}>
        In this page you can add, delete, and edit you task you want to do. You
        can also add a reward for your task. By doing so, you can get more
        motivated and be more productive by the end of the day.
      </p>
      <div>
        <div className="col-md-9 ">
          <Container>
            <Row id="row">
              <Col md={10} className="d-flex align-items-center">
                <TodoApp />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="row gx-3 justify-content-center"></div>
        <div className="container">
          <div className="row gx-3 justify-content-center">
            {todoAppContainers.map((container, index) => (
              <div className="col-md-6" key={index}>
                {container}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayTask;