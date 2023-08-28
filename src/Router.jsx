import { createHashRouter } from "react-router-dom";
import { Index } from "./pages/index";
import { Modal } from "./components/modal-container";
import { KANBAN } from "./apis/kaban";
import { ErrorPage } from "./pages/error";
import { Layout } from "./pages/layout";
import { Board } from "./pages/board";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    loader: KANBAN.getBoardsName,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/new-board",
        async lazy() {
          const { AddBoard } = await import("./pages/add-board");
          return {
            element: <AddBoard />,
          };
        },
        action: KANBAN.manageBoards,
      },
      {
        path: "/:idBoard",
        element: <Board />,
        id: "board",
        loader: KANBAN.getBoard,
        children: [
          {
            path: "/:idBoard/details/:status/:title",
            id: "detailsTask",
            async lazy() {
              const { DetailsTask } = await import("./pages/details-task");
              return {
                element: (
                  <Modal>
                    <DetailsTask />
                  </Modal>
                ),
              };
            },
            loader: KANBAN.getTask,
            action: KANBAN.manageTask,
            children: [
              {
                path: "/:idBoard/details/:status/:title/edit",
                async lazy() {
                  const { EditTask } = await import("./pages/edit-task");
                  return {
                    element: <EditTask />,
                  };
                },
                action: KANBAN.manageTask,
              },
              {
                path: "/:idBoard/details/:status/:title/delete",
                async lazy() {
                  const { Notification } = await import(
                    "./components/notification"
                  );
                  return {
                    element: (
                      <Notification
                        message="This operation do not be undone"
                        title="Delete Task"
                        value="delete"
                      />
                    ),
                  };
                },
                action: KANBAN.manageTask,
              },
            ],
          },
          {
            path: "/:idBoard/:column/add-task",
            async lazy() {
              const { AddTask } = await import("./pages/add-task");
              return {
                element: (
                  <Modal>
                    <AddTask />
                  </Modal>
                ),
              };
            },
            action: KANBAN.manageTask,
          },
          {
            path: "/:idBoard/:column/edit",
            action: KANBAN.manageColumn,
            async lazy() {
              const { EditColumn } = await import("./pages/edit-column");
              return {
                element: (
                  <Modal>
                    <EditColumn />
                  </Modal>
                ),
              };
            },
          },
          {
            path: "/:idBoard/add-column",
            action: KANBAN.manageColumn,
            async lazy() {
              const { AddColumn } = await import("./pages/add-column");
              return {
                element: (
                  <Modal>
                    <AddColumn />
                  </Modal>
                ),
              };
            },
          },
          {
            path: "/:idBoard/:column/delete",
            action: KANBAN.manageColumn,
            async lazy() {
              const { Notification } = await import(
                "./components/notification"
              );
              return {
                element: (
                  <Modal>
                    <Notification
                      message="This operation do not be undone. All task associated will be delete"
                      title="Delete column"
                      value="delete"
                    />
                  </Modal>
                ),
              };
            },
          },
          {
            path: "/:idBoard/delete-board",
            action: KANBAN.manageBoards,
            async lazy() {
              const { Notification } = await import(
                "./components/notification"
              );
              return {
                element: (
                  <Modal>
                    <Notification
                      message="This operation do not be undone"
                      title="Delete Board"
                      value="delete"
                    />
                  </Modal>
                ),
              };
            },
          },
        ],
      },
    ],
  },
]);
