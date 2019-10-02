import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import BlogCard from './BlogCard';

class BlogList extends Component {
  render() {
    return (
      <div>
        <h2>BlogList</h2>
          Map and create BlogCards...
        <Row>
          {
            this.props.blogs.map(blog =>{
              return <BlogCard key={blog.id} blog={blog}/>
            })
          }
          {/* <BlogCard title={"Hello there"} description={"Let's code"} body={"We rock!!!!"} /> */}
        </Row>
      </div>
    );
  }
}

export default BlogList;