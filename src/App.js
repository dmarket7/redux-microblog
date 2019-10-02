import React, { Component } from 'react';
import Routes from './Routes'
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   blogs: [{title: "asdf", description: "asdf", body: "asdf↵", id: "216b435c-e932-49e2-9e07-bfad0e80da96"}]
    // }
    this.addBlog = this.addBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addBlog(blog){
    blog.id = uuid();
    this.setState({blogs: [...this.state.blogs, blog]});
  }

  editBlog(editedBlog) {
    let newBlogs = this.state.blogs.filter(blog => blog.id !== editedBlog.id);
    this.setState({
      blogs: [...newBlogs, editedBlog]
    });
  }

  deleteBlog(id) {
    let newBlogs = this.state.blogs.filter(blog => blog.id !== id);
    this.setState({
      blogs: newBlogs
    });
  }

  addComment(id, comment){
    let findBlog = this.state.blogs.filter(blog => blog.id === id)[0];
    if(!findBlog.comments) {
      findBlog.comments = [comment]
    } else {
      findBlog.comments.push(comment);
    }
    let newBlogs = this.state.blogs.filter(blog => blog.id !== id);
    this.setState({
      blogs: [...newBlogs, findBlog]
    });
  }

  deleteComment(id, comment){
    let findBlog = this.state.blogs.filter(blog => blog.id === id)[0];
    let newComments = findBlog.comments.filter(comm => comm !== comment);
    findBlog.comments = newComments;
    let newBlogs = this.state.blogs.filter(blog => blog.id !== id);
    this.setState({
      blogs: [...newBlogs, findBlog]
    });
  }

  render() {
    return (
      <div className="App">
        <Routes 
                addBlog={this.addBlog}
                editBlog={this.editBlog}
                deleteBlog={this.deleteBlog}
                addComment={this.addComment}
                deleteComment={this.deleteComment}
        />
      </div>
    );
  }
}

export default App;