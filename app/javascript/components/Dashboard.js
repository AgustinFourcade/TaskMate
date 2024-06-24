import React from "react";
import AppBar from "./AppBar"; 
import Box from '@mui/material/Box';
import FloatingActionButtons from "./FloatingActionButtons";
import KanbanBoard from "./Board";

class MaterialComponentList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <FloatingActionButtons />
        <KanbanBoard />
      </React.Fragment>
    );
  }
}

export default MaterialComponentList;