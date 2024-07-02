import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board() {
  const [toDo, setToDo] = useState([]);
  const [done, setDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((json) => {
        setDone(json.filter((task) => task.status === "DONE"));
        setInProgress(json.filter((task) => task.status === "IN_PROGRESS"));
        setToDo(json.filter((task) => task.status === "TODO"));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, draggableId);

    const task = findItemById(draggableId, [...toDo, ...done, ...inProgress]);

    setNewState(destination.droppableId, task);
  };

  function deletePreviousState(sourceDroppableId, taskId) {
    switch (sourceDroppableId) {
      case "1":
        setToDo(removeItemById(taskId, toDo));
        break;
      case "2":
        setInProgress(removeItemById(taskId, inProgress));
        break;
      case "3":
        setDone(removeItemById(taskId, done));
        break;
    }
  }
  function setNewState(destinationDroppableId, task) {
    let updatedTask;
    switch (destinationDroppableId) {
      case "1": // TO DO
        updatedTask = { ...task, completed: false };
        setToDo([updatedTask, ...toDo]);
        break;
      case "2": // IN PROGRESS
        updatedTask = { ...task, completed: false };
        setInProgress([updatedTask, ...inProgress]);
        break;
      case "3": // DONE
        updatedTask = { ...task, completed: true };
        setDone([updatedTask, ...done]);
        break;
    }
  }
  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "1300px",
          margin: "0 auto",
        }}
      >
        <Column title={"TODO"} tasks={toDo} id={"1"} />
        <Column title={"IN PROGRESS"} tasks={inProgress} id={"2"} />
        <Column title={"DONE"} tasks={done} id={"3"} />
      </div>
    </DragDropContext>
  );
}
