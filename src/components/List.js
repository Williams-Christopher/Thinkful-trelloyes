import React from 'react';

import './List.css';
import Card from './Card';

function List(props) {
    //console.log(`props: ${JSON.stringify(props)}`);

    // Create an array of Card components
    let listCards = props.cards.map(card =>
        <Card id={card.id} onDeleteCard={props.onDeleteCard} title={card.title} content={card.content} />
    );
    
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {listCards}
                <button className='list-add-button' type='submit' name='cardAdd' onClick={() => props.onAddCard(props.id)}>Add Random</button>
            </div>
        </section>
    );
}

export default List;