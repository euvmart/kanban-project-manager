/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./index.css";
import { nanoid } from "nanoid";
import { ColumnBoard } from "../../components/column-board";
import { CardTask } from "../../components/card";
import { Link, Outlet, useLoaderData, useResolvedPath } from "react-router-dom";
import { SearchData, Trash } from "../../assets/svg";

export function Board() {
  const board = useLoaderData();
  const pathname = useResolvedPath().pathname;
  const isDataAvailable = board.columns.length != 0;
  const columnsBoardSelected = () => {
    return board.columns.map((column) => (
      <ColumnBoard key={`board-${board.id}-column-${nanoid()}`} column={column}>
        {column.tasks.map((task) => (
          <CardTask key={`board-${board.id}-task-${nanoid()}`} task={task} />
        ))}
      </ColumnBoard>
    ));
  };

  return (
    <>
      <header className="board-header">
        <p className="board-header_title">{board ? board.name : "No name"}</p>
        <Link id="delete-board" to="delete-board">
          <Trash />
        </Link>
      </header>

      <main className="container-board">
        {!isDataAvailable ? (
          <NoDataFound />
        ) : (
          <div className="board">
            {columnsBoardSelected()}{" "}
            <Link to="add-column" className="board_add-column"></Link>
          </div>
        )}

        <Outlet />
      </main>
    </>
  );
}

function NoDataFound() {
  return (
    <div className="ctn-no-data">
      <span>
        <SearchData />
      </span>
      <p>This board has no columns.</p>
      <Link to="add-column" className="button btn-primary-solid ">
        Add Column
      </Link>
    </div>
  );
}
