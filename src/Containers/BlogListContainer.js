import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';
import { getBlogsFromDB } from '../actions';

function mapStateToProps(state) {

  return { blogs: state.blogs, loading: state.loading };
}

const connectedComponent = connect(mapStateToProps, { getBlogsFromDB });

export default connectedComponent(BlogList);