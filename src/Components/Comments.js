import React, { Component } from "react";
import CommentsList from '../CommentsList';
import NewCommentForm from '../NewCommentForm';

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsList comments={this.props.comments}
                      deleteComment={this.props.deleteComment}
                      id={this.props.id}/>
        <NewCommentForm addComment={this.props.addComment} id={this.props.id}/>
      </div>
    );
  }
}

export default Comments;