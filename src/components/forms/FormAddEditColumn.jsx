/* eslint-disable react/prop-types */
import { Form, useRouteLoaderData, Link } from "react-router-dom";
import { Input, Select } from "../inputs";
import { Button } from "../button";
import { Trash } from "../../assets/svg";
import "./index.css";
function FormAddEditColumn({ Title, isEditOption, isFirstColumn, column }) {
  const board = useRouteLoaderData("board");
  const columnsName = board.columns.map((column) => column.name);

  return (
    <Form className="form-base form-add-column form-bkg-md" method="post">
      <div className="form-add-column_option">
        <input
          style={{ position: "absolute", zIndex: -1, opacity: 0 }}
          type="checkbox"
          name="isFirst"
          value={isFirstColumn}
          defaultChecked={true}
          aria-labelledby="control-first-column"
        />
        <h2 className="title">{Title}</h2>
        {isEditOption && (
          <Link to={column.toDelete}>
            <Trash />
          </Link>
        )}
      </div>
      <div className="form-add-item-data">
        <label htmlFor="name-column">Name</label>
        <Input
          name="name"
          isRequired={true}
          id="name-column"
          placeholder="e.g. pending"
          defaultValue={isEditOption ? column.name : null}
        />
      </div>
      <div hidden={isFirstColumn}>
        <div className="form-add-item-data">
          <label>Set position</label>
          <div className="radio-buttons">
            <div className="option-radio-button">
              <input
                type="radio"
                value="before"
                id="option-before"
                name="position"
                className="radio-button"
                defaultChecked={column.position === "before"}
              />
              <label htmlFor="option-before">Before</label>
            </div>
            <div className="option-radio-button">
              <input
                type="radio"
                value="after"
                id="option-after"
                name="position"
                className="radio-button"
                defaultChecked={column.position === "after"}
              />
              <label htmlFor="option-after">After</label>
            </div>
          </div>
        </div>

        <div className="form-add-item-data">
          <label htmlFor="reference-column">To column</label>
          <Select
            id="reference-column"
            optionValues={
              isEditOption
                ? columnsName.filter((name) => name != column.name)
                : columnsName
            }
            name="column"
            defaultValue={isEditOption && column.column}
          />
        </div>
      </div>

      <Button
        isPrimary={true}
        type="submit"
        name="option"
        value={isEditOption ? "edit" : "add"}
      >
        {isEditOption ? "Edit" : "Add column"}
      </Button>
    </Form>
  );
}
export { FormAddEditColumn };
