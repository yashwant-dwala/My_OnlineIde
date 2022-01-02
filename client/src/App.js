import './App.css';
import * as React from 'react';
import Question from './components/Question';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      {/* <h1>My Code Compiler</h1> */}
      <Question />
      <Editor/>
    </div>
  );
}

export default App;
