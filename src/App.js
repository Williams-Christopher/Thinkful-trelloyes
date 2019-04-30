import React from 'react';
import './App.css';
import List from './components/List';
import STORE from './store';

function App(props) {
  //console.log(props.store);

  let lists = STORE.lists.map((listItem, i) => {
    return ({
      key: listItem.id + i + listItem.cardIds.length,
      header: listItem.header,
      cards: listItem.cardIds,
    })
  });
  //console.log(lists);
  for (let i=0; i < lists.length; i++) {
    lists[i].cards.forEach((cardId, j) => {
      lists[i].cards[j] = STORE.allCards[cardId];
    });
  }
  console.log(lists);

  let listComponents = lists.map(item => {
    return <List key={item.key} header={item.header} cards={item.cards} />
  })

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloeyes!</h1>
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