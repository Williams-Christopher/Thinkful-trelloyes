import React from 'react';

import './List.css';
import Card from './Card';

function List(props) {
    console.log(`props: ${JSON.stringify(props)}`);

    
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {/* {cards} */}
            </div>
        </section>
    );
}

export default List;