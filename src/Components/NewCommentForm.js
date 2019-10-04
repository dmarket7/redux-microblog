import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import '../NewCommentForm.css';

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("This.props.id", this.props.id)
    console.log("This.props.comment", this.state.comment)
    this.props.addCommentToDB(this.props.id, this.state.comment);
    this.setState({
      comment: ''
    });
    this.props.history.push(`/${this.props.id}`);
  }

  render() {
    return (
      <Form inline={true} row="true" onSubmit={this.handleSubmit}>
        <Col sm={12} className="offset-sm-2">
          <FormGroup >
            <Label for="comment">Comment &nbsp;</Label>
            <Input className="comment-input" onChange={this.handleChange} 
                   type="text" name="comment" id="comment" 
                   value={this.state.comment} 
            />
            <Button type="submit">Add Comment</Button>
          </FormGroup>
        </Col>
      </Form>
    );
  }
}

export default withRouter(NewCommentForm);