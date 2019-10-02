import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, CardSubtitle, Col } from 'reactstrap';

class BlogCard extends Component {
  render() {
    return (
      <Col sm="4">
        <Card body>
          <CardTitle>{this.props.blog.title}</CardTitle>
          <CardSubtitle>{this.props.blog.description}</CardSubtitle>
          <CardText>{this.props.blog.body}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    );
  }
}

export default BlogCard;