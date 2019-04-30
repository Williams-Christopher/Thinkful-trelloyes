import React from 'react';

import './App.css';
import List from './components/List';
import STORE from './store';

function App(props) {
  // Rebuild lists[] from STORE. Avoid side-effects, right?
  let lists = STORE.lists.map((listItem, i) => {
    return ({
      key: listItem.id + i + listItem.cardIds.length,
      header: listItem.header,
      cards: listItem.cardIds,
    })
  });

  // Replace each card reference in lists.cards with the corresponding object
  // from STORE.allCards and insert a new key 'key' for React.
  for (let i=0; i < lists.length; i++) {
    lists[i].cards.forEach((cardId, j) => {
      lists[i].cards[j] = STORE.allCards[cardId]; // Replacement
      lists[i].cards[j].key = lists[i].key + j.toString() + cardId; // Add a the key 'key'
    });
  }
  console.log(lists);

  // Build out an array of List components
  let listComponents = lists.map(item => {
    return <List key={item.key} header={item.header} cards={item.cards} />
  });

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trello-eyes!</h1>
      </header>
      <div className='App-list'>
       {/* {
        lists.forEach(item => {
          return <List header={item.header} cards={item.cards} />
        })
        } */}
        {listComponents}
      </div>
    </main>
  );
}

export default App;