import { useMediaQuery } from "../../apis/media-query";
import { Link, Outlet, useLoaderData, useResolvedPath } from "react-router-dom";
import { ListBoards } from "../../components/List-boards";
import "./index.css";
import { useEffect } from "react";
import { ArrowMove } from "../../assets/svg";

export function Layout() {
  const isDeskop = useMediaQuery(600);
  const nameBoards = useLoaderData();
  const pathname = useResolvedPath().pathname;

  function viewList(isChecked) {
    const $root = document.getElementById("root");
    if (isChecked) $root.removeAttribute("close-list");
    else $root.setAttribute("close-list", "");
  }

  useEffect(() => {
    if (!isDeskop) return;
    const $root = document.getElementById("root");
    const $toogleList = document.getElementById("toggle-list");
    $root.removeAttribute("close-list");
    $toogleList.checked = true;
  }, []);
  useEffect(() => {
    if (isDeskop) return;
    const $toogleList = document.getElementById("toggle-list");
    const $root = document.getElementById("root");
    $root.setAttribute("close-list", "");
    $toogleList.checked = false;
  }, [pathname]);

  return (
    <>
      <section className="layout-sidebar">
        <header>
          <Link to='/'>
            <div className="logo">
              <img src="./logo_mobile.svg" alt="Kanban's logo" />
              <p className="logo-title">KANBAN</p>
            </div>
          </Link>

          <div className="list_boards_open-list" >
            <input
              id="toggle-list"
              type="checkbox"
              aria-label="open-close-lists-board"
              name="view"
              onChange={(event) => {
                viewList(event.currentTarget.checked);
              }}
            />
            <span className="icon-open-list">
              <ArrowMove />
            </span>
          </div>
        </header>
        <ListBoards nameBoards={nameBoards} />
      </section>
      <section className="layout-main">
        <Outlet />
      </section>
    </>
  );
}
