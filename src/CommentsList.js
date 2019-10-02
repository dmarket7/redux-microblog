import React, { Component } from "react";
import { Button } from 'reactstrap';

class CommentsList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.comments.map((comm, idx) => {
            return <li key={idx}>{comm}<Button color="danger" onClick={() => this.props.deleteComment(this.props.id, comm)}>X</Button></li>
          })
        }
      </ul>
    );
  }
}

export default CommentsList;