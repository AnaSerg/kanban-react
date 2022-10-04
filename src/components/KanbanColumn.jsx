import React from 'react';

const KanbanColumn = ({title, number}) => {

    return (
        <div className="kanban__column">
            <div className="kanban__column-title-area">
                <h2 className="kanban__column-title">{title}</h2>
                <p className="kanban__cards-number">{number}</p>
            </div>
        </div>
    )
}

export default KanbanColumn;