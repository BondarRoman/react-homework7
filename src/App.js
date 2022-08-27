import React from 'react';
import './App.css';
import { MainTodo } from './components/Todo/Todo/mainTodo';
import './components/Todo/Todo/images/point.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainTodo/>
      </header>
    </div>
  );
}

export default App;
