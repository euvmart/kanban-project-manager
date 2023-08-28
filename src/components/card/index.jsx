
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import "./index.css";

 export function CardTask(props) {
  const { task } = props;
  const nav = useNavigate();
  const subtasks = task.subtasks || null;
  const completedSubtasks = subtasks
    ? task.subtasks.filter((subtask) => !!subtask.isCompleted)
    : null;

  return (
    <>
      <article
        className="card-task"
        data-title={task.title}
        data-status={task.status}
        onClick={() => {
          nav(`details/${task.status}/${task.title.replaceAll(" ", "-")}`);
        }}
      >
        <h3 className="card-task_title">{task.title}</h3>
        <p className="card-task_subtask">{`${
          subtasks ? completedSubtasks.length : "0"
        } de ${subtasks ? subtasks.length : "0"} subtasks`}</p>
      </article>
    </>
  );
}

