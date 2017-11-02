import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserRegistration from './components/UserRegistration'
import { injectGlobal } from 'styled-components'
injectGlobal`
body {
    color: grey;
    background-image: url('https://i.ytimg.com/vi/IjZEdsZBu74/maxresdefault.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
input,
textarea {
  margin: 2px 10px;
  background: none;
  color: $muted-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: $width;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $muted-color;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: $hl-color;
  }
  &:focus ~ .bar:before {
    width: $width;
  }
}
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserRegistration />
      </div>
    );
  }
}

export default App;
