import React from 'react';
import KanbanColumn from './KanbanColumn';

const Kanban = () => {

    return (
        <div className="content kanban">
            <h1 className="content__title">Kanban</h1>
            <div className="kanban__columns">
                <KanbanColumn title="To Do" number="(7)" />
                <KanbanColumn title="In Progress" number="(5)" />
                <KanbanColumn title="Completed" number="(2)" />
            </div>
        </div>
    )
}

export default Kanban;