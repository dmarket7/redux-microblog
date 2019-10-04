import React, { Component } from "react";
import { Row } from 'reactstrap';
import BlogCard from './BlogCard';

class BlogList extends Component {
  async componentDidMount() {
    await this.props.getBlogsFromDB();
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <Row>
          {!this.props.blogs ?
            <p>{this.props.loading}</p> :

            this.props.blogs.map(blog => {
              // destructure with variable names
              return <BlogCard key={blog.id}
                blog={blog} upVote={this.props.upVote} downVote={this.props.downVote}
              />
            })
          }
        </Row>
      </div>
    );
  }
}

export default BlogList;