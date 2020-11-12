import React, { Component } from 'react';
import patient from "../patient.json";

const list = patient.conditions;

class ListOfConditions extends Component {
  render() {
    return (
      <ul>
        {list.map(i => (<li>{i}</li>))}
      </ul>
    )
  }
}

export default ListOfConditions;