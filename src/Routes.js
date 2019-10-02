import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import BlogDetailsContainer from './Containers/BlogDetailsContainer';
import NewBlogFormContainer from './Containers/NewBlogFormContainer';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' render={() => <Home blogs={this.props.blogs} />} />

          <Route exact path='/new' render={(props) => <NewBlogFormContainer {...props} />} />

          <Route path='/:postId' render={(props) => <BlogDetailsContainer {...props} 
                                                                  // blogs={this.props.blogs}
                                                                  // editBlog={this.props.editBlog}
                                                                  // deleteBlog={this.props.deleteBlog}
                                                                  // addComment={this.props.addComment}
                                                                  // deleteComment={this.props.deleteComment}
                                                    />}
          />

          <Redirect to='/' />

        </Switch>
      </div>
    );
  }
}

export default Routes;