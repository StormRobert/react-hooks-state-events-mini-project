import React from "react";
import Task from "./Task";
function TaskList({tasks, onDelete}) {
  const tasksLis = tasks.map((task) => (
    <Task onDelete={onDelete} key={task.text} category={task.category} text={task.text}/>
  ))
  return (
    <div className="tasks">
   {tasksLis}
    </div>
  );
}

export default TaskList;
