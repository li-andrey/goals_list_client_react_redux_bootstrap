import React from "react";
import { Form } from "react-bootstrap";

const MySelect = ({ value, onChange }) => {
  return (
    <Form.Select
      aria-label="Default"
      size="sm"
      className="w-25 my-1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Сортировка
      </option>
      <option value="title">По названию</option>
      <option value="date"> По дате</option>
      <option value="importance">По важности</option>
    </Form.Select>
  );
};

export default MySelect;
