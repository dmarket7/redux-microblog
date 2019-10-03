import { connect } from 'react-redux';
import { editBlog, deleteBlog, addComment, deleteComment, getBlogFromDB, deleteBlogFromDB } from '../actions';
import BlogDetails from '../Components/BlogDetails';

function mapStateToProps(state, ownProps) {
  return { currentBlog: state.currentBlog, loading: state.loading, ownProps }
}

const connectedComponent = connect(
  mapStateToProps,
  { editBlog, deleteBlog, addComment, deleteComment, getBlogFromDB, deleteBlogFromDB }
);

export default connectedComponent(BlogDetails);