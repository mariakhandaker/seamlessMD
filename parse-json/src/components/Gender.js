import React, { Component } from 'react';
import patient from "../patient.json";

let gender = patient.gender;

function capitalize (gender) {
  return gender.charAt(0).toUpperCase() + gender.slice(1);
}

gender = capitalize(gender);
console.log(gender);

class Gender extends Component {
 
  render() {
    return (gender)
  }
}

export default Gender;