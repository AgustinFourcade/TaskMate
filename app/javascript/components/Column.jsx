import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: #f1f1f1;
  width: 400px;
  height: 900px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Title = styled.h4`
  text-align: left;
  margin-block-end: 10px;
  margin-block-start: 15px;
  margin-inline-start: 15px;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f1f1f1;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
  return (
    <Container className="column">
      <Title>{title}</Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
