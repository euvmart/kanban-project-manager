import {  useRouteLoaderData } from "react-router-dom";
import { FormAddEditColumn } from "../../components/forms/FormAddEditColumn";

function AddColumn() {
  const board = useRouteLoaderData("board");
  const isFirstColumn = !board.columns.length
  return(
    <FormAddEditColumn 
    Title='Add New Column'
    isEditOption={false}
    isFirstColumn={isFirstColumn}
    column={{}}/>
  )

}

export { AddColumn };
