import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/Content/List'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
