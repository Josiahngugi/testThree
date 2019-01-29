import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      traits: [],
    }

    this.getTraits = this. getTraits.bind(this);
    }

  getTraits(){
    return axios.get("https://swapi.co/api/people")
    .then((response) =>{
      console.log(response.data.results);
      this.setState({traits: response.data.results});
    })
    }

    componentDidMount(){
      this.getTraits()
    }

  render() {
    const {traits}= this.state;
    return (
      <div className="App">
        <List traits ={traits} />
      </div>
    );
  }
}

export default App;
