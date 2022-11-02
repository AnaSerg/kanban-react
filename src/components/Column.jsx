import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ tasks, column }) => {

    return (
        <div className="column">
            <h1 className="column__title">{column.title}</h1>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div
                    className="tasks"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Column;