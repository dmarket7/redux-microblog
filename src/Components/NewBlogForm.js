import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class NewBlogForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.addBlog(this.state);
    this.setState({
      title: '',
      description: '',
      body: ''
    });
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div className="container justify-content-center mt-5">
        <h2>Add a new blog post!</h2>
        <Form row="true" onSubmit={this.handleSubmit}>
          <Col sm={8} className="offset-sm-2">
            <FormGroup >
              <Label for="title">Title</Label>
              <Input onChange={this.handleChange} type="text" name="title" id="title" value={this.state.title}/>
            </FormGroup>
            <FormGroup >
              <Label for="description">Description</Label>
              <Input onChange={this.handleChange} type="text" name="description" id="description" value={this.state.description}/>
            </FormGroup>
            <FormGroup >
              <Label for="body">Body</Label>
              <Input onChange={this.handleChange} type="textarea" name="body" id="body" value={this.state.body}/>
            </FormGroup>
            <Button className="mx-3" color="primary" type="submit">Save</Button>
            <Link className="mx-3" to="/"><Button color="secondary">Cancel</Button></Link>
          </Col>
        </Form>
      </div>
    );
  }
}

export default NewBlogForm;