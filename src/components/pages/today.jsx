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
      <p className="lead">
        In this app you can create a list of things that's you want to do. you can set a reminder for the list,
        and you can get a reward if you complete your task on time.
         why the reward? so that you can get motivate to do your task and you can get more productive in the future
      </p>
      <div>
        <div className="col-md-9 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addTodoAppContainer}
            style={{backgroundColor: "#7743DB"}}
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