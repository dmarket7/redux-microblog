import React, { Component } from "react";
import { Row } from 'reactstrap';
import BlogCard from './BlogCard';

class BlogList extends Component {
  async componentDidMount() {
    await this.props.getBlogsFromDB();
  }

  render() {
    console.log("BLOGS FROM PROPS", this.props.blogs);
    return (
      <div>
        <h2>BlogList</h2>
        Map and create BlogCards...
        <Row>

          {this.props.loading ?
            <p>{this.props.loading}</p> :

            this.props.blogs.map(blog => {
              // destructure with variable names
              return <BlogCard key={blog.id}
                blog={blog}
                 />
            })
          }
        </Row>
      </div>
    );
  }
}

export default BlogList;