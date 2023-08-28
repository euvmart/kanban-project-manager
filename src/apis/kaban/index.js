import { redirect } from "react-router-dom";
import { MODEL } from "./model";

async function getBoardsName() {
  const boards = MODEL.getBoards();
  return boards.map(({ id, name }) => ({ id, name }));
}

async function getBoard({ params }) {
  const idBoard = Number(params.idBoard);
  const foundBoard = MODEL.getABoard({ idBoard });
  return foundBoard;
}

async function getTask({ params }) {
  return MODEL.getTask({
    idBoard: Number(params.idBoard),
    columnOrigin: params.status,
    taskToFind: params.title.replaceAll("-", " "),
  });
}

async function manageTask({ params, request }) {
  const formData = await request.formData();
  const option = formData.get("option");

  switch (option) {
    case "edit":
      {
        const originalTask = {
          idBoard: Number(params.idBoard),
          status: params.status,
          title: params.title.replaceAll("-", " "),
        };
        const updatedTask = createTask(formData);
        MODEL.editTask({
          idBoard: Number(params.idBoard),
          originalTask,
          updatedTask,
        });
      }
      break;
    case "add":
      {
        const newTask = createTask(formData);
        MODEL.newTask({
          idBoard: Number(params.idBoard),
          columnSource: newTask.status,
          taskToAdd: newTask,
        });
      }
      break;
    case "update":
      {
        const updatedTask = updateTask(formData);
        MODEL.updateTask({
          idBoard: Number(params.idBoard),
          columnOrigin: params.status,
          taskUpdated: updatedTask,
        });
      }
      break;
    case "delete":
      {
        MODEL.removeTask({
          idBoard: Number(params.idBoard),
          columnSource: params.status,
          taskToDelete: params.title.replaceAll("-", " "),
        });
      }
      break;
    default:
      break;
  }

  return redirect(`/${params.idBoard}`);
}
function createTask(formData) {
  if (!formData.has("title")) return null;
  const subtasks = [];
  for (const [key, value] of formData) {
    if (!key.startsWith("subtask")) continue;
    if (!value) continue;
    const subtask = { title: value, isCompleted: false };
    subtasks.push(subtask);
  }
  return {
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
    subtasks,
  };
}
function updateTask(formData) {
  const objectData = Object.fromEntries(formData);
  const subtasks = [];
  for (const key in objectData) {
    //key structure -> subtasks-Title of subtask
    if (!key.startsWith("subtasks")) continue;
    const title = key.split("subtasks-")[1];
    const isCompleted = objectData[key] === "true" || false;
    subtasks.push({ title, isCompleted });
  }
  return {
    title: objectData.title,
    description: objectData.description,
    status: objectData.status,
    subtasks,
  };
}

async function manageColumn({ params, request }) {
  const formData = await request.formData();
  const option = formData.get("option");
  switch (option) {
    case "add":
      {
        const columnToAdd = Object.fromEntries(formData);
        if (Boolean(columnToAdd.isFirst) && !columnToAdd.name) break;
        else if (
          !columnToAdd.name &&
          !columnToAdd.position &&
          !columnToAdd.column
        )
          break;
        MODEL.newColumn({ idBoard: Number(params.idBoard), columnToAdd });
      }
      break;
    case "edit":
      {
        const columnToEdit = Object.fromEntries(formData);
        if (
          !(columnToEdit.name && columnToEdit.position && columnToEdit.column)
        )
          break;
        MODEL.editColumn({
          idBoard: Number(params.idBoard),
          columnOrigin: params.column,
          columnUpdated: columnToEdit,
        });
      }
      break;
    case "delete":
      {
        MODEL.removeColumn({
          idBoard: Number(params.idBoard),
          columnSource: params.column,
        });
      }
      break;
    default: {
      return redirect(`/nofound`);
    }
  }
  return redirect(`/${params.idBoard}`);
}

function addBoard(formData) {
  const newBoard = { name: formData.get("name"), columns: [] };
  for (const [key, value] of formData) {
    if (key.startsWith("nameColumn"))
      newBoard.columns.push({ name: value, tasks: [] });
  }
  return newBoard;
}

async function manageBoards({ params, request }) {
  const formData = await request.formData();
  const option = formData.get("option");
  switch (option) {
    case "add": {
      const newBoard = addBoard(formData);
      const idBoard = MODEL.setBoard(newBoard);
      return redirect(`/${idBoard}`);
    }
    case "delete": {
      MODEL.deleteBoard({ idBoard: Number(params.idBoard) });
      return redirect("/");
    }

    default:
      break;
  }
}

export const KANBAN = {
  getBoardsName,
  getBoard,
  getTask,
  manageColumn,
  manageBoards,
  manageTask,
};
