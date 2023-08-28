import "./index.css";
import { VerticalDots } from "../../assets/svg";
import {
  Form,
  useLoaderData,
  useRouteLoaderData,
  Link,
  useResolvedPath,
  Outlet,
} from "react-router-dom";
import { Checkbox, Select } from "../../components/inputs";

export function DetailsTask() {
  const selectedBoard = useRouteLoaderData("board");
  const task = useLoaderData();
  const pathname = useResolvedPath().pathname;
  const isEdit =
    pathname.includes("edit") || pathname.includes("delete") ? true : false;
  const columnsName = selectedBoard.columns.map((column) => column.name);

  return (
    <>
      {isEdit ? (
        <Outlet />
      ) : (
        <Form className="form-base form-details-task" method="post">
          <div className="container-title-subtask">
            <h2>{task.title}</h2>
            <input hidden name="title" defaultValue={task.title} />

            <div
              className="menu-task-options"
              onClick={(e) => {
                e.currentTarget.classList.toggle("view-task-option");
              }}
            >
              <VerticalDots />

              <div className="task-options">
                <Link to="edit">Edit task</Link>
                <Link to="delete">Delete task</Link>
              </div>
            </div>
          </div>
          <input
            hidden
            name="description"
            defaultValue={task.description || ""}
          />
          <span name="description" className="description-task">
            {task.description || "No available description"}
          </span>
          <div className="container-description-subtask">
            <div className="container-description-subtask_title">
              <p className="subtitle-description-subtask">Subtasks</p>
            </div>
            <div className="container-description-subtask_list">
              {task.subtasks
                ? task.subtasks.map((subtask, index) => (
                    <Checkbox
                      key={index}
                      name={`subtasks-${subtask.title}`}
                      label={subtask.title}
                      isChecked={subtask.isCompleted}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div>
            <label htmlFor="status" className="subtitle-description-subtask">
              Current status
            </label>
            <Select
              name={"status"}
              optionValues={columnsName}
              defaultValue={task.status}
              id="status"
            />
          </div>
          <button
            type="submit"
            className="button btn-primary-solid"
            name="option"
            value="update"
          >
            Save changes
          </button>
        </Form>
      )}
    </>
  );
}

