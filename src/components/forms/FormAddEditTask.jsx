/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import { Input, TextArea, Select } from "../inputs";
import { WidgetInputAndDelete } from "../widget-input-with-delete";
import { Button } from "../button";
import "./index.css";

function FormAddEditTask(props) {
  const { isAddForm, optionValues, refSubstask, task }= props
  return (
    <>
      <Form className="form-base form-bkg-md" method="post">
        <h2 className="title">{isAddForm ? "Add New Task" : "Edit Task"}</h2>
        <div className="form-add-item-data">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            placeholder="e.g Take a coffee break"
            isRequired={true}
            defaultValue={task?.title}
          />
        </div>
        <div className="form-add-item-data">
          <label htmlFor="description">Description</label>
          <TextArea
            name={"description"}
            placeholder={`e.g It's always good to take a break. This 15 minutes break will recharge the batteries a little.`}
            defaultValue={task?.description}
          />
        </div>
        <div className="form-add-item-data">
          <p>Subtasks</p>
          <div className="subtasks-add-input-container">
            {
              <WidgetInputAndDelete
                ref={refSubstask}
                name="subtask"
                placeholder="e.g Make coffee"
                initialValue={task?.subtasks || []}
              />
            }
          </div>
          <Button
            handlerClick={() => refSubstask.current.addInput()}
            type="button"
          >
            +Add New Subtask
          </Button>
        </div>
        <div className="form-add-item-data">
          <label htmlFor="status">Status</label>
          <Select
            id="status"
            name="status"
            optionValues={optionValues}
            defaultValue={task?.status}
          />
        </div>
        <Button
          isPrimary={true}
          type="submit"
          name="option"
          value={isAddForm ? "add" : "edit"}
        >
          {isAddForm ? "Create Task" : "Update Task"}
        </Button>
      </Form>
    </>
  );
}
export { FormAddEditTask };
