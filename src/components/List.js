import React from 'react';
import ReactDOM from 'react-dom';
import '../List.css';

function List(props) {
    console.log(props);
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                <p>Test content</p>
            </div>
        </section>
    );
}

export default List;