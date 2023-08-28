//conexiones a la BD (local storage)
import { uselocalStorage } from "../storage";
const { getStorage, setStorage } = await uselocalStorage({
  key: "kanban",
  initialValue: [],
});

function getBoards() {
  return getStorage();
}

function getBoard({ idBoard }) {
  const board = getStorage().find((board) => board.id === idBoard);
  const position = getStorage().findIndex((board) => board.id === idBoard);
  return [board, position];
}
async function getABoard({ idBoard }) {
  const [board] = getBoard({ idBoard });
  return board;
}

function getTask({ idBoard, columnOrigin, taskToFind }) {
  const [board] = getBoard({ idBoard });
  return board.columns
    .find((column) => column.name === columnOrigin)
    .tasks.find((task) => task.title === taskToFind);
}

function updateTask({ idBoard, columnOrigin, taskUpdated }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const positionColumn = board.columns.findIndex(
    (column) => column.name === columnOrigin
  );
  const positionTask = board.columns[positionColumn].tasks.findIndex(
    (task) => task.title === taskUpdated.title
  );

  if (columnOrigin === taskUpdated.status) {
    board.columns[positionColumn].tasks.splice(positionTask, 1, taskUpdated);
  } else {
    board.columns[positionColumn].tasks.splice(positionTask, 1);
    const newPositionColumn = board.columns.findIndex(
      (column) => column.name === taskUpdated.status
    );
    board.columns[newPositionColumn].tasks.push(taskUpdated);
  }
  setStorage(boards.toSpliced(positionBoard, 1, board));
}
function editTask({ idBoard, originalTask, updatedTask }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });

  const positionColumn = board.columns.findIndex(
    (column) => column.name === originalTask.status
  );
  const positionTask = board.columns[positionColumn].tasks.findIndex(
    (task) => task.title === originalTask.title
  );

  const subtasksOriginal = [
    ...board.columns[positionColumn].tasks[positionTask].subtasks,
  ];

  const subtasks = updatedTask.subtasks.map((newSubtask) => {
    const positionExistingSubtask = subtasksOriginal.findIndex(
      (prevSubtask) => prevSubtask.title === newSubtask.title
    );

    if (positionExistingSubtask != -1)
      return subtasksOriginal[positionExistingSubtask];
    else return { title: newSubtask.title, isCompleted: false };
  });

  const newTask = {
    title: updatedTask.title,
    status: updatedTask.status,
    description: updatedTask.description,
    subtasks,
  };
  if (originalTask.status === updatedTask.status) {
    board.columns[positionColumn].tasks.splice(positionTask, 1, newTask);
  } else {
    board.columns[positionColumn].tasks.splice(positionTask, 1);
    const newPositionColumn = board.columns.findIndex(
      (column) => column.name === updatedTask.status
    );
    board.columns[newPositionColumn].tasks.push(newTask);
  }
  setStorage(boards.toSpliced(positionBoard, 1, board));
}

function removeTask({ idBoard, columnSource, taskToDelete }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const positionColumn = board.columns.findIndex(
    (column) => column.name === columnSource
  );
  const positionTask = board.columns[positionColumn].tasks.findIndex(
    (task) => task.title === taskToDelete
  );
  board.columns[positionColumn].tasks.splice(positionTask, 1);
  setStorage(boards.toSpliced(positionBoard, 1, board));
  return null;
}
function newTask({ idBoard, columnSource, taskToAdd }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const positionColumn = board.columns.findIndex(
    (column) => column.name === columnSource
  );
  board.columns[positionColumn].tasks.push(taskToAdd);
  setStorage(boards.toSpliced(positionBoard, 1, board));
  return null;
}
function newColumn({ idBoard, columnToAdd }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const column = {
    name: columnToAdd.name,
    tasks: [],
  };
  const positionColumn = calculatePositionColumn({
    board,
    position: columnToAdd.position,
    reference: columnToAdd.column,
  });
  board.columns.splice(positionColumn, 0, column);
  setStorage(boards.toSpliced(positionBoard, 1, board));
  return null;
}
function editColumn({ idBoard, columnOrigin, columnUpdated }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const actualPositionColumn = calculatePositionColumn({
    board,
    position: "none",
    reference: columnOrigin,
  });
  const newPositionColumn = calculatePositionColumn({
    board,
    position: columnUpdated.position,
    reference: columnUpdated.column,
  });
  const [toEditColumn] = board.columns.splice(actualPositionColumn, 1);
  if (columnOrigin != columnUpdated.name) {
    toEditColumn.name = columnUpdated.name;
    toEditColumn.tasks = toEditColumn.tasks.map((task) => {
      return { ...task, status: columnUpdated.name };
    });
  }

  if (
    columnUpdated.position === "before" &&
    newPositionColumn - 1 === actualPositionColumn
  ) {
    board.columns.splice(actualPositionColumn, 0, toEditColumn);
  } else {
    board.columns.splice(newPositionColumn, 0, toEditColumn);
  }

  setStorage(boards.toSpliced(positionBoard, 1, board));
  return null;
}

function removeColumn({ idBoard, columnSource }) {
  const boards = getBoards();
  const [board, positionBoard] = getBoard({ idBoard });
  const positionColumnToRemove = calculatePositionColumn({
    board,
    position: "none",
    reference: columnSource,
  });
  board.columns.splice(positionColumnToRemove, 1);
  setStorage(boards.toSpliced(positionBoard, 1, board));
  return null;
}

function calculatePositionColumn({ board, position, reference }) {
  const positionReference = board.columns.findIndex(
    (column) => column.name === reference
  );
  const calculatedPosition =
    position === "after" ? positionReference + 1 : positionReference;
  return calculatedPosition;
}

function setBoard(data) {
  const boards = getBoards();
  const newBoardId = new Date().getTime();
  setStorage([...boards, { ...data, id: newBoardId, isActive: "false" }]);
  return newBoardId;
}
function deleteBoard({ idBoard }) {
  const boards = getBoards();
  setStorage(boards.filter((board) => board.id != idBoard));
}

export const MODEL = {
  getBoards,
  getBoard,
  getTask,
  updateTask,
  removeTask,
  newTask,
  newColumn,
  editColumn,
  removeColumn,
  setBoard,
  editTask,
  deleteBoard,
  getABoard,
};
