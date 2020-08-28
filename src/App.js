import React from 'react';
import './App.css';
import ClassBased from './components/classBased';
import Functional from './components/functional';

const employeeList = [
  {
    name: 'Vijaya',
    gender: 'female',
    id: '111'
  },
  {
    name: 'Smita',
    gender: 'female',
    id: '222'
  },
  {
    name: 'Aryan',
    gender: 'male',
    id: '333'
  },
  {
    name: 'Abhay',
    gender: 'male',
    id: '444'
  }
]
function App() {
  return (
    <div className="App">
      <ClassBased name="React Training class props" />
      <Functional employeeList={employeeList} />
    </div>
  );
}

export default App;
