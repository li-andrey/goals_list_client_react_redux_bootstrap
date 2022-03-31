import React from "react";
import MySelect from "./UI/select/MySelect";
import { Form, FormControl } from "react-bootstrap";

const GoalsFilter = ({ filter, setFilter }) => {
  return (
    <>
      <div className="d-flex justify-content-end ">
        <Form className="w-25 my-1">
          <FormControl
            type="search"
            size="sm"
            placeholder="Поиск..."
            aria-label="Search"
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          />
        </Form>
      </div>
      <div className="d-flex justify-content-end ">
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
        />
      </div>
    </>
  );
};

export default GoalsFilter;
