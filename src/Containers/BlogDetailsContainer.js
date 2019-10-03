import { connect } from 'react-redux';
import { editBlog, deleteBlog, addComment, deleteComment } from '../actions';
import BlogDetails from '../Components/BlogDetails';

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.postId;
  let blog = state.blogs[id];
  if(blog) blog.id = id;
  return { blog };
}

const connectedComponent = connect(
  mapStateToProps,
  { editBlog, deleteBlog, addComment, deleteComment }
);

export default connectedComponent(BlogDetails);