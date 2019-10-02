import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogHeader extends Component {
  render() {
    return (
      <div className="mt-5">
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Link to="/" className="mx-3"><Button color="info">Home</Button></Link>
            <Link to="/new" className="mx-3"><Button color="primary">Add New Blog</Button></Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default BlogHeader;