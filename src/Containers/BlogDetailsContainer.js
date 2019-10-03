import { connect } from 'react-redux';
import { editBlogInDB, deleteBlog, addComment, deleteComment, getBlogFromDB, deleteBlogFromDB } from '../actions';
import BlogDetails from '../Components/BlogDetails';

function mapStateToProps(state, ownProps) {
  return { currentBlog: state.currentBlog, loading: state.loading, ownProps }
}

const connectedComponent = connect(
  mapStateToProps,
  { deleteBlog, addComment, deleteComment, getBlogFromDB, deleteBlogFromDB, editBlogInDB }
);

export default connectedComponent(BlogDetails);