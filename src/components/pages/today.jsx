/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import TodoApp from "../todoapp";
import TodoApp1 from "../todoapp1";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TodayTask = () => {
  const [todoAppContainers, setTodoAppContainers] = useState([]);

  const addTodoAppContainer = () => {
    const newTodoAppContainer = (
      <Container>
      <Row id="row">
        <Col md={10} className="d-flex align-items-center">
          <TodoApp />
        </Col>
        <Col md={10} className="d-flex align-items-center">
          <TodoApp1 />
        </Col>
      </Row>
    </Container>
    );
    setTodoAppContainers((prevContainers) => [
      ...prevContainers,
      newTodoAppContainer,
    ]);
  };

  return (
    <>
      <p className="lead" style={{color: "#B6EADA"}}>
        In this page you can add, delete, and edit you task you want to do.
        You can also add a reward for your task.
        By doing so, you can get more motivated and be more productive by the end of the day.
      </p>
      <div>
        <div className="col-md-9 ">
          <button
            type="button"
            className="btn btn-dark"
            onClick={addTodoAppContainer}
            style={{backgroundColor: "#5B8FB9"}}
          >
            Add
          </button>
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
        {/* Clear the float after the fourth box */}
      </div>
    </>
  );
};

export default TodayTask;