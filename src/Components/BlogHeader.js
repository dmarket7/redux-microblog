import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BlogHeader.css';

class BlogHeader extends Component {
  render() {
    return (
      <Jumbotron className="bg-warning">
        <h1 className="display-3">Microblog!</h1>
        <p className="lead">Click below to add a new blog post...</p>
        <hr className="my-2" />
        <p>We look forward to blogging with you.</p>
        <p className="lead">
          <Link to="/" className="mx-3"><Button color="info">Home</Button></Link>
          <Link to="/new" className="mx-3"><Button color="primary">Add New Blog</Button></Link>
        </p>
      </Jumbotron>
    );
  }
}

export default BlogHeader;