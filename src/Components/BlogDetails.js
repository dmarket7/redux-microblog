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

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  deleteAndRedirect(id) {
    this.props.deleteBlog(id);
    this.props.history.push('/');
  }

  render() {
    // const id = this.props.match.params.postId; //abstract out, send in container with mapStateToProps
    // const blog = this.props.blogs.filter(blog => blog.id === id)[0];
    const { title, body, description, comments, id } = this.props.blog;

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
                      addComment={this.props.addComment}
                      deleteComment={this.props.deleteComment}
                      id={id}
            />
          </div> :
          <EditBlogForm blog={this.props.blog} editBlog={this.props.editBlog} toggleEdit={this.toggleEdit} />
        }
        
      </div>
    );
  }
}

export default BlogDetails;