import React, { Component } from 'react';
import Routes from './Routes'
import BlogHeader from './Components/BlogHeader'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogHeader />
        <Routes />
      </div>
    );
  }
}

export default App;