import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { delGoal } from "../reducers/goalsReducer";
import { updateGoal } from "../reducers/goalsReducer";
import { Modal } from "react-bootstrap";

const Goal = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleAchieved = () => {
    setVisible(false);
    dispatch(updateGoal({ ...props.goal, achieved: true }));
  };

  const handleDelete = () => {
    dispatch(delGoal(props.goal.id));
  };

  return (
    <div
      className="goal__content row cols-12 align-items-center "
      style={{ width: "100%" }}
    >
      <div className="col-1 ">{props.number}.</div>
      <div className="col-5 col-sm-6 ">
        {props.goal.title}
        {/*   <a href={`/goals/${props.goal.id}`} className="link-dark"> </a> */}
      </div>

      <div className="col-3 col-sm-2 text-center">{props.goal.date}</div>
      <div className="col-1">{props.goal.importance}</div>
      {props.goal.achieved !== true && (
        <div className="col-1">
          <Form>
            <Form.Check
              isValid
              type="switch"
              id="custom-switch"
              onChange={() => setVisible(true)}
            />
          </Form>
          <Modal
            show={visible}
            onHide={() => setVisible(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Поздравляем!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Ты достиг своей цели. Продолжай в том же духе.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleAchieved}>
                Ура!
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <div className="col-12 col-sm-1 d-grid gap-2">
        <Button variant="outline-danger" size="sm" onClick={handleDelete}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Goal;
