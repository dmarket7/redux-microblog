import React, { Component } from "react";
import BlogHeader from './BlogHeader';
import EditBlogForm from './EditBlogForm';
import { Button } from 'reactstrap';
import Comments from './Comments'

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
    console.log("CURRENT BLOG", this.props.currentBlog);
    if (!this.props.currentBlog || this.props.loading) {
      return <p>{this.props.loading}</p>
    } else {
      const { title, body, description, comments, id } = this.props.currentBlog;
      return (
        <div className="container">
          <BlogHeader />
          {!(this.state.editing) ?
            <div>
              <h2>{title}</h2>
              <h5><i>{description}</i></h5>
              <div className="buttons">
                <Button color="success" className="mx-3" onClick={this.toggleEdit}>Edit</Button>
                <Button color="danger" className="mx-3" onClick={() => this.deleteAndRedirect(id)}>Delete</Button>
              </div>
              <p>{body}</p>
              <Comments comments={comments || []}
                addCommentToDB={this.props.addCommentToDB}
                deleteComment={this.props.deleteComment}
                id={id}
              />
            </div> :
            <EditBlogForm currentBlog={this.props.currentBlog} editBlogInDB={this.props.editBlogInDB} toggleEdit={this.toggleEdit} />
          }

        </div>
      );
    }
  }
}

export default BlogDetails;