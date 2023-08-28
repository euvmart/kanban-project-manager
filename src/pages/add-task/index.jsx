import { useParams, useRouteLoaderData } from "react-router-dom";
import { useRef } from "react";
import { FormAddEditTask } from "../../components/forms/FormAddEditTask";

function AddTask() {
  const selectedBoard = useRouteLoaderData("board");
  const {column}= useParams()
  const columnsName = selectedBoard.columns.map((column) => column.name);
  const refSubstask = useRef(null);

  return (
    <>
      <FormAddEditTask
        refSubstask={refSubstask}
        isAddForm={true}
        optionValues={columnsName}
        task={{status: column}}
      />
    </>
  );
}
export { AddTask };
