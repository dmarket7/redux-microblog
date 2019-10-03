import { connect } from 'react-redux';
import { editBlog, deleteBlog, addComment, deleteComment } from '../actions';
import BlogDetails from '../Components/BlogDetails';

function mapStateToProps(state, ownProps) {
  const { postId } = ownProps.match.params;
  const blog = state.blogs[postId];
  if (blog) { blog.id = postId; }
  return { blog };
}

const connectedComponent = connect(
  mapStateToProps,
  { editBlog, deleteBlog, addComment, deleteComment }
);

export default connectedComponent(BlogDetails);