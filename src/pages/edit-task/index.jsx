import { FormAddEditTask } from "../../components/forms/FormAddEditTask";
import { useRouteLoaderData } from "react-router-dom";
import { useRef } from "react";

export  function EditTask() {
  const selectedBoard = useRouteLoaderData("board");
  const columnsName = selectedBoard.columns.map((column) => column.name);
  const task = useRouteLoaderData("detailsTask");
  const refSubstask = useRef(null);
  const subtasks = [];
  for (const { title } of task.subtasks) {
    subtasks.push({
      id: subtasks.length + 1,
      name: "subtask",
      placeholder: "e.g Make coffee",
      defaultValue: title,
    });
  }

  return (
    <>
      <FormAddEditTask
        isAddForm={false}
        refSubstask={refSubstask}
        optionValues={columnsName}
        task={{ ...task, subtasks: subtasks }}
      />
    </>
  );
}

