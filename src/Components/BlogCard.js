import React, { Component } from "react";
import { Card, Button, CardTitle, CardSubtitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogCard extends Component {
  render() {
    const { title, description } = this.props.blog
    return (
      <Col sm="4">
        <Card body>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
          <Link to={`/${this.props.id}`}><Button>View Full Post</Button></Link>
        </Card>
      </Col>
    );
  }
}

export default BlogCard;