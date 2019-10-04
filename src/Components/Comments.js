import React, { Component } from "react";
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsList comments={this.props.comments}
                      deleteCommentFromDB={this.props.deleteCommentFromDB}
                      id={this.props.id}/>
        <NewCommentForm addCommentToDB={this.props.addCommentToDB} id={this.props.id}/>
      </div>
    );
  }
}

export default Comments;