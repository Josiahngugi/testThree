import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      traits: [],
    }
  }

  getTraits(){
    return axios.get("https://swapi.co/api/people")
    .then((response) =>{
      console.log(response.data.results);
    })

  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
