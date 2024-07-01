import React, { useState, useEffect } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

export default function KanbanBoard() {
    const [board, setBoard] = useState({
        columns: [
            {
                id: 1,
                title: "TODO",
                cards: []
            },
            {
                id: 2,
                title: "IN PROGRESS",
                cards: []
            },
            {
                id: 3,
                title: "DONE",
                cards: []
            }
        ]
    });

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch("http://localhost:3000/tasks");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                updateBoard(result);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        }

        fetchTasks();
    }, []);

    function updateBoard(tasks) {
        const updatedBoard = { ...board };
        updatedBoard.columns.forEach(column => {
            column.cards = tasks.filter(task => task.status === column.title.toUpperCase().replace(' ', '_'));
        });
        setBoard(updatedBoard);
    }

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
