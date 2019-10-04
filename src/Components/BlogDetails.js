import React, { Component } from "react";
import BlogHeader from './BlogHeader';
import EditBlogForm from './EditBlogForm';
import { Button } from 'reactstrap';
import Comments from './Comments'
import '.././BlogDetails.css';

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteAndRedirect = this.deleteAndRedirect.bind(this);
  }

  async componentDidMount() {
    await this.props.getBlogFromDB(this.props.match.params.postId);
  }

  // async componentDidUpdate(){
  //   await this.props.getBlogFromDB(this.props.match.params.postId);
  // }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  async deleteAndRedirect(id) {
    await this.props.deleteBlogFromDB(id);
    this.props.history.push('/');
  }

  render() {
    if (!this.props.currentBlog || this.props.loading) {
      return <p>{this.props.loading}</p>
    } else {
      const { title, body, description, comments, id, votes } = this.props.currentBlog;
      return (
        <div className="container">
          <BlogHeader />
          {!(this.state.editing) ?
            <div>
              <h2>{title}</h2>
              <h5><i>{description}</i></h5>
              <div className="votes my-2">
                <Button color="white" className="mx-2" onClick={() => this.props.upVote(id)}>
                  <i class="fas fa-thumbs-up text-success"></i>
                </Button>
                {votes}
                <Button color="white" className="mx-2" onClick={() => this.props.downVote(id)}>
                  <i class="fas fa-thumbs-down text-danger"></i>
                </Button>
              </div>
              <p className="blog-body">{body}</p>
              <Comments comments={comments || []}
                addCommentToDB={this.props.addCommentToDB}
                deleteCommentFromDB={this.props.deleteCommentFromDB}
                id={id}
              />
              <div className="buttons mt-5">
                <Button color="success" className="mx-3" onClick={this.toggleEdit}>
                  <i class="far fa-edit"></i> Edit
                </Button>
                <Button color="danger" className="mx-3" onClick={() => this.deleteAndRedirect(id)}>
                  <i class="far fa-trash-alt"></i> Delete
                </Button>
              </div>
            </div> :
            <EditBlogForm currentBlog={this.props.currentBlog} editBlogInDB={this.props.editBlogInDB} toggleEdit={this.toggleEdit} />
          }

        </div>
      );
    }
  }
}

export default BlogDetails;