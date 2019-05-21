// import React from 'react';

// import './App.css';
// import List from './components/List';
// import STORE from './store';

// function App(props) {
//   // Rebuild lists[] from STORE. Avoid side-effects, right?
//   let lists = STORE.lists.map((listItem, i) => {
//     return ({
//       key: listItem.id + i + listItem.cardIds.length,
//       header: listItem.header,
//       cards: listItem.cardIds,
//     })
//   });

//   // Replace each card reference in lists.cards with the corresponding object
//   // from STORE.allCards and insert a new key 'key' for React.
//   for (let i=0; i < lists.length; i++) {
//     lists[i].cards.forEach((cardId, j) => {
//       lists[i].cards[j] = STORE.allCards[cardId]; // Replacement
//       lists[i].cards[j].key = lists[i].key + j.toString() + cardId; // Add a the key 'key'
//     });
//   }
//   console.log(lists);

//   // Build out an array of List components
//   let listComponents = lists.map(item => {
//     return <List key={item.key} header={item.header} cards={item.cards} />
//   });

//   return (
//     <main className='App'>
//       <header className='App-header'>
//         <h1>Trello-eyes!</h1>
//       </header>
//       <div className='App-list'>
//        {/* {
//         lists.forEach(item => {
//           return <List header={item.header} cards={item.cards} />
//         })
//         } */}
//         {listComponents}
//       </div>
//     </main>
//   );
// }

// export default App;

import React from 'react';
import List from './components/List'
import './App.css';
import STORE from './store';

export default class App extends React.Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };

  state = {
    store: STORE,
  };

  handleAddCard = (listId) => {
    let newCard = this.newRandomCard();
    // Add new card ID to the appropriate lists list of cards
    let newLists = this.state.store.lists.map((list) => {
      if(list.id === listId) {
        list.cardIds.push(newCard.id)
      }
      return list;
    });

    // Update the AllCards object with the new card
    let newCards = {...this.state.store.allCards, [newCard.id]: {'title': newCard.title, 'content': newCard.content}}
    
    // Update the state
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      },  
    });
  }

  // Provided function fro generating random cards
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleDeleteCard = (cardId) => {
    console.log('List delete clicked', cardId);
  }

  // Provided function to remove a KVP from an object
  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trello-eyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              onAddCard={this.handleAddCard}
              onDeleteCard={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}
