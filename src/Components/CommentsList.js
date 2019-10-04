import React, { Component } from "react";
import { Button, Col } from 'reactstrap';
import '../CommentList.css';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  async deleteComment(blogId, commId) {
    await this.props.deleteCommentFromDB(blogId, commId);
  }

  render() {
    return (
      <Col sm={{size: 6, offset: 3}}>
        <ul className="comment-list">
          {
            this.props.comments.map((comm) => {
              return (
                <li key={comm.id}>{comm.text}
                  <Button className="m-2" color="danger"
                    onClick={() => this.deleteComment(this.props.id, comm.id)}>
                    <i class="far fa-trash-alt"></i>
                  </Button></li>
              )
            })
          }
        </ul>
      </Col>
    );
  }
}

export default CommentsList;