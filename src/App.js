import './App.css';
import React from 'react';
import ListTask from './comp/list task/ListTask';



import AddTask from './comp/Addtask/AddTask'


function App() {
  return (
    <div className="App">
      <AddTask/>
      
      <ListTask/>
    </div>
  );
}

export default App;
