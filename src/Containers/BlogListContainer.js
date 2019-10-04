import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';
import { getBlogsFromDB, upVote, downVote } from '../actions';

function mapStateToProps(state) {

  return { blogs: state.blogs, loading: state.loading };
}

const connectedComponent = connect(mapStateToProps, { getBlogsFromDB, upVote, downVote });

export default connectedComponent(BlogList);