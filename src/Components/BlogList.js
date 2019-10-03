import React, { Component } from "react";
import { Row } from 'reactstrap';
import BlogCard from './BlogCard';

class BlogList extends Component {
  render() {
    console.log("BLOGS FROM PROPS", this.props.blogs);
    return (
      <div>
        <h2>BlogList</h2>
          Map and create BlogCards...
        <Row>
          {
            this.props.blogs.map(blog =>{
              // destructure with variable names
              return <BlogCard key={Object.keys(blog)[0]} 
                               blog={Object.values(blog)[0]} 
                               id={Object.keys(blog)[0]}/>
            })
          }
        </Row>
      </div>
    );
  }
}

export default BlogList;