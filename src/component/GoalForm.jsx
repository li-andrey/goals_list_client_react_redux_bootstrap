import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { addGoal } from "../reducers/goalsReducer";
import { useDispatch } from "react-redux";

const GoalForm = ({ create, visible, setVisible }) => {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState({
    title: "",
    date: "",
    importance: "",
    achieved: "false",
  });

  const addNewGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Date.now(),
      achieved: false,
      ...goal,
    };
    dispatch(addGoal(newGoal));
    create(newGoal);
    setGoal({ title: "", date: "", importance: "" });
  };

  return (
    <>
      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Твоя новая цель</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Четко сформулируй и запиши её</Form.Label>
              <Form.Control
                value={goal.title}
                onChange={(e) => setGoal({ ...goal, title: e.target.value })}
                type="text"
                placeholder="Я устроился на работу Frontend-разработчиком "
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Не забудь про сроки!</Form.Label>
              <Form.Control
                type="date"
                placeholder="формат даты: гггг, мм, дд"
                value={goal.date}
                onChange={(e) => setGoal({ ...goal, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="importance">
              <Form.Label>
                Оцени насколько это важная цель (от 1 до 10)
              </Form.Label>
              <Form.Control
                type="range"
                min="0"
                max="10"
                step="1"
                value={goal.importance}
                onChange={(e) =>
                  setGoal({ ...goal, importance: e.target.value })
                }
              />
              <Form.Control disabled value={goal.importance} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={addNewGoal}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>

      {/*      <Modal visible={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Запиши свою цель</Form.Label>
              <Form.Control
                value={goal.title}
                id="title"
                onChange={(e) => setGoal({ ...goal, title: e.target.value })}
                type="text"
                placeholder="Новая цель по SMART"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>До какого числа ее надо выполнить</Form.Label>
              <Form.Control
                type="date"
                id="date"
                placeholder="формат даты: гггг, мм, дд"
                value={goal.date}
                onChange={(e) => setGoal({ ...goal, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="importance">
              <Form.Label>Насколько это важная цель (от 1 до 10)</Form.Label>
              <Form.Control
                type="text"
                id="importance"
                value={goal.importance}
                onChange={(e) =>
                  setGoal({ ...goal, importance: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addNewGoal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default GoalForm;
