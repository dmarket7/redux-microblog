import React, { Component } from "react";
import BlogListContainer from '../Containers/BlogListContainer';
import BlogHeader from './BlogHeader';

class Home extends Component {
  render() {
    return (
      <div className="container">
        
        <BlogListContainer />
      </div>
    );
  }
}

export default Home;