import React, { Component } from 'react';
import './App.css';

// Assuming you have separate files for SearchBox and CardList components
import SearchBox  from './components/searchBox/searchBox.js'; 
import {CardList} from './components/card-list/CardList.jsx'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '' 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} /> 
        <CardList monsters={this.state.monsters}>
        <CardList monsters={filteredMonsters} /> 

        
        </CardList> 
      </div>
    );
  }
}

export default App;
