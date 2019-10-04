import React, { Component } from "react";
import { Button } from 'reactstrap';

class CommentsList extends Component {
  constructor(props){
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  async deleteComment(blogId, commId){
    await this.props.deleteCommentFromDB(blogId, commId);
  }

  render() {
    return (
      <ul>
        {
          this.props.comments.map((comm) => {
            return <li key={comm.id}>{comm.text}<Button color="danger" onClick={() => this.deleteComment(this.props.id, comm.id)}>X</Button></li>
          })
        }
      </ul>
    );
  }
}

export default CommentsList;