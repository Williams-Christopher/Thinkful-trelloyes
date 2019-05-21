import React from 'react';

import './Card.css';

function Card(props) {
    console.log(props);
    return (
        // <div className='Card' key={props.key}>
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button type='submit' name='cardDelete' onClick={() => props.onDeleteList(props.id)}>Delete</button>
        </div>
    )
};

export default Card;