import React from 'react';
import Card from './Card/Card.jsx';

const KanbanColumn = ({title, number}) => {

    return (
        <div className="kanban__column">
            <div className="kanban__column-title-area">
                <h2 className="kanban__column-title">{title}</h2>
                <p className="kanban__cards-number">{number}</p>
            </div>
            <Card />
        </div>
    )
}

export default KanbanColumn;