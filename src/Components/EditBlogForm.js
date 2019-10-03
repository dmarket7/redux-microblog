import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class EditBlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.currentBlog.title,
      description: this.props.currentBlog.description,
      body: this.props.currentBlog.body,
      id: this.props.currentBlog.id,
      votes: this.props.currentBlog.votes,
      comments: this.props.currentBlog.comments
    });
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt){
    evt.preventDefault();
    await this.props.editBlogInDB(this.state);
    this.props.toggleEdit();
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

export default EditBlogForm;