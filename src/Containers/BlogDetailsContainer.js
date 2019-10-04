import { connect } from 'react-redux';
import { editBlogInDB, deleteBlog, addCommentToDB, deleteCommentFromDB, 
          getBlogFromDB, deleteBlogFromDB, upVote, downVote } from '../actions';
import BlogDetails from '../Components/BlogDetails';

function mapStateToProps(state) {
  return { currentBlog: state.currentBlog, loading: state.loading }
}

const connectedComponent = connect(
  mapStateToProps,
  { deleteBlog, addCommentToDB, deleteCommentFromDB, getBlogFromDB, 
    deleteBlogFromDB, editBlogInDB, upVote, downVote }
);

export default connectedComponent(BlogDetails);