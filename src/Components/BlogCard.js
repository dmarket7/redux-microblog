import React, { Component } from "react";
import { Card, Button, CardTitle, CardSubtitle, Col, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogCard extends Component {
  render() {
    const { title, description } = this.props.blog
    return (
      <Col className="my-3" md="4">
        <Card body>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
          <Link to={`/${this.props.blog.id}`}><Button className="my-2">View Full Post</Button></Link>
          <CardFooter className="text-muted">
            <Button color="success" onClick={() => this.props.upVote(this.props.blog.id)} className="mx-2">
              <i class="far fa-thumbs-up"></i>
            </Button>
            {this.props.blog.votes}
            <Button color="danger" onClick={() => this.props.downVote(this.props.blog.id)} className="mx-2">
              <i class="far fa-thumbs-down"></i>
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default BlogCard;