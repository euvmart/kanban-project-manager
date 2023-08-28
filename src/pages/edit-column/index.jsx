import { useParams,useRouteLoaderData } from "react-router-dom";
import { FormAddEditColumn } from "../../components/forms/FormAddEditColumn";

function EditColumn() {
  const params = useParams();
  const board = useRouteLoaderData("board");
  const columnsName = board.columns.map((column) => column.name);
  const defaultPosition = (() => {
        const indexColumnForEdit = columnsName.findIndex(
          (column) => column === params.column
        );
        if (indexColumnForEdit === 0) {
          return {
            position: "before",
            column: columnsName[indexColumnForEdit + 1],
          };
        } else {
          return {
            position: "after",
            column: columnsName[indexColumnForEdit - 1],
          };
        }
      })();

  return (
    <FormAddEditColumn
      Title="Edit Column"
      isEditOption={true}
      isFirstColumn={false}
      column={{...defaultPosition, name: params.column, toDelete: `/${board.id}/${params.column}/delete`}}
    />
  );
}

export { EditColumn };
