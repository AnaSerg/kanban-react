import React from 'react';
import CardImage from '../../images/card_image.png';

const Card = () => {

    return (
        <div className="card">
            <div className="card-top">
                <h3 className="card__title">Карточка</h3>
                <button className="card-settings"></button>
            </div>
            <img src={CardImage} className="card__image" alt="card attachment"/>
            <p className="card__description"></p>
            <div className="card-down">
                <div className="card__tag">
                    <p className="card__tag-text"></p>
                </div>
                <div className="card__date">
                    <img className="card__date-img" alt="calendar"/>
                    <p className="card__date-text"></p>
                </div>
            </div>
        </div>
    )
}

export default Card;