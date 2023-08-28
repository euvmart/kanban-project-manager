/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./index.css";
import { ToggleTheme } from "../toggle-theme";
import { AddBoard } from "../../assets/svg";

function ListBoards(props) {
  const { nameBoards } = props;
  return (
    <aside className="container-list-boards">
      <nav className="list-boards">
        <div className="list-boards_list">
          <div className="list-boards_container">
            <p>{`ALL BOARDS (${nameBoards.length})`} </p>
            <div className="list-boards_names-boards">
              {nameBoards.map((board) => (
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={`/${board.id}`}
                  key={board.id}
                >
                  {board.name}
                </NavLink>
              ))}
            </div>
            <NavLink
              to="/new-board"
              id="create-new-board"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>
                <AddBoard />
              </span>
              Create New Board
            </NavLink>


          </div>
          <div className="ctn-toggle-theme">
            <ToggleTheme />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export { ListBoards };
