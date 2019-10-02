import React, { Component } from 'react';
import Routes from './Routes'
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: []
    }
    this.addBlog = this.addBlog.bind(this);
  }

  addBlog(blog){
    blog.id = uuid();
    this.setState({blogs: [...this.state.blogs, blog]});
    console.log("Blogs!!!!!", this.state.blogs)
  }

  render() {
    return (
      <div className="App">
        <Routes blogs={this.state.blogs} addBlog={this.addBlog}/>
      </div>
    );
  }
}

export default App;