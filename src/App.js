import React from 'react';
import './App.css';

function App(props) {
  console.log(props.store);
  return (
    <main className='App'>
      {/* content goes here */}
      <header className='App-header'>
        <h1>Trelloeyes!</h1>
      </header>
      <div className='App-list'>
      </div>
    </main>
  );
}

export default App;