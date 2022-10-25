import React, { cloneElement, useState } from 'react';
import './Kanban.css';

const Kanban = () => {

    const [columns, setColumns] = useState([
        {id: 1, title: 'To Do', items: [{id: 1, title: 'Write a letter'}, {id: 2, title: 'Find a key'}]},
        {id: 2, title: 'In Progress', items: [{id: 3, title: 'Writing a letter'}, {id: 4, title: 'Seaking for a key'}]},
        {id: 3, title: 'Done', items: [{id: 5, title: 'Wrote a letter'}, {id: 6, title: 'Found a key'}]}
    ])
    const [currentColumn, setCurrentColumn] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const handleDragStart = (e, column, item) => {
        setCurrentColumn(column);
        setCurrentItem(item);

    }

    const handleDragLeave = (e) => {
        e.target.style.boxShadow = 'none';
    }

    const handleDragEnd = (e) => {
        e.target.style.boxShadow = 'none';

    }

    const handleDragOver = (e) => {
        e.preventDefault();
        if(e.target.className === 'item') {
            e.target.style.boxShadow = '0 2px 3px gray';
        }

    }

    const handleDragDrop = (e, column, item) => {
        e.preventDefault();
        const currentIndex = currentColumn.items.indexOf(currentItem);
        currentColumn.items.splice(currentIndex, 1);
        const dropIndex = column.items.indexOf(item);
        column.items.splice(dropIndex + 1, 0, currentItem);
        setColumns(columns.map(c => {
            if(c.id === column.id) {
                return column;
            }
            if(c.id === currentColumn.id) {
                return currentColumn;
            }
            return c;
        }))

    }

    const handleCardDrop = (e, column) => {
        column.items.push(currentItem);
        const currentIndex = currentColumn.items.indexOf(currentItem);
        currentColumn.items.splice(currentIndex, 1);
        setColumns(columns.map(c => {
            if(c.id === column.id) {
                return column;
            }
            if(c.id === currentColumn.id) {
                return currentColumn;
            }
            return c;
        }))
    }

    return (
        <div className="content kanban">
            {columns.map(column =>
               <div
                className="column"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleCardDrop(e, column)}

               >
                   <div className="column__title">{column.title}</div>
                    {column.items.map(item =>
                        <div
                            onDragStart={(e) => handleDragStart(e, column, item)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDragEnd={(e) => handleDragEnd(e)}
                            onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleDragDrop(e, column, item)}
                            draggable={true}
                            className="item">{item.title}
                        </div>
                    )}
               </div>
            )}
        </div>
    )
}

export default Kanban;