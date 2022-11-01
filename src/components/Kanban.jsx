import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import initialData from './initialData';
import './Kanban.css';

const Kanban = () => {

    const initialTasks = initialData;
    const [tasks, setTasks] = useState(initialTasks);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
    }

        return (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="kanban">
                        <Droppable droppableId="column-1">
                            {(provided) => (
                                <div
                                className="column"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                >
                                    <h1 className="column__title">To-Do</h1>
                                    {tasks.map(({id, content}, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <div
                                                    className="item"
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    >
                                                        {content}
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
        );
}

export default Kanban;