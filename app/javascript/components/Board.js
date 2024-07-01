import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import board from "../../assets/boardStructure";

import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";

export default function KanbanBoard() {
    return (
        <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={(draftCard) => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={console.log}
        />
    );
}
