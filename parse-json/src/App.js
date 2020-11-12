import React from 'react';
import './App.css';
import patient from "./patient.json";
import ListOfConditions from './components/List'
import Gender from './components/Gender'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>Name of patient: {`${patient.name[0].given} ${patient.name[0].family}`}</p>
          <p>Organization name: {patient.managingOrganization.display}</p>
          <p>Gender: <Gender></Gender> </p>
          <p>Number of conditions they have: {patient.conditions.length} </p>
          <p>List of all conditions: <ListOfConditions></ListOfConditions></p>
      </header>
    </div>
  )
};

export default App;
