import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import BlogDetails from './BlogDetails';
import NewBlogForm from './NewBlogForm'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' render={() => <Home blogs={this.props.blogs} />} />

          <Route exact path='/new' render={(props) => <NewBlogForm {...props} addBlog={this.props.addBlog} />} />

          <Route path='/:postId' render={(props) => <BlogDetails {...props} blogs={this.props.blogs} editBlog={this.props.editBlog} deleteBlog={this.props.deleteBlog} />} />

          <Redirect to='/' />

        </Switch>
      </div>
    );
  }
}

export default Routes;