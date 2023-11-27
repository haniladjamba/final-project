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
      <Row>
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fuga,
        harum laborum similique impedit quas ut suscipit? Nam, numquam quia
        totam labore inventore cumque fuga aspernatur possimus laboriosam,
        placeat quis.
      </p>
      <div>
        <div className="col-md-9 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addTodoAppContainer}
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