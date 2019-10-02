import React, { Component } from "react";
import BlogList from './BlogList';
import BlogHeader from './BlogHeader';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <BlogHeader />
        <BlogList blogs={this.props.blogs}/>
      </div>
    );
  }
}

export default Home;