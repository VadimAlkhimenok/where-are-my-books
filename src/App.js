import React from 'react';
import classes from './App.module.css';
import { Main } from './components/Main/Main';
import { TopPanel } from '../src/components/TopPanel/TopPanel';
import { BottomPanel } from '../src/components/BottomPanel/BottomPanel';
import { BookState } from './context/BookState';


function App() {
  return (
    <div className={ classes.App }>
      <BookState>
        <TopPanel />
        <Main />
        <BottomPanel />
      </BookState>
    </div>
  );
}

export default App;
