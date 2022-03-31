import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Goal = (props) => {
  const handleAchieved = () => {
    props.getNotAchievedGoals({ ...props.goal, achieved: true });
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
              onChange={handleAchieved}
            />
          </Form>
        </div>
      )}
      <div className="col-12 col-sm-1 d-grid gap-2">
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => props.remove(props.goal)} // для выполненных целей не работает delete. Попробовать решаить с помощью Redux
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Goal;
