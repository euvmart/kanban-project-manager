/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./index.css";

function ColumnBoard(props) {
  const { column, children } = props;
  return (
    <div className="column-board">
      <div className="column-board_header">
        <Link
          className="column-board_header--status"
          to={`${column.name}/edit`}
        >{`${column.name} (${column.tasks.length})`}</Link>
        <Link className='column-board_header--add-task' to={`${column.name}/add-task`}>+</Link>
      </div>

      <div
        data-title={column.name}
        className="column-board_card-task-container "
      >
        {children}
      </div>
    </div>
  );
}
export { ColumnBoard };
