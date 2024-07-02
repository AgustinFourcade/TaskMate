import React from "react";
import AppBar from "./AppBar";
import FloatingActionButtons from "./FloatingActionButtons";
import KanbanBoard from "./components/Board";
import './index.css';

class MaterialComponentList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <FloatingActionButtons />
        <div className="kanban-board">
          <KanbanBoard />
        </div>
      </React.Fragment>
    );
  }
}

export default MaterialComponentList;