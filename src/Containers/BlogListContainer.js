import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';
import { getBlogsFromDB } from '../actions';

function mapStateToProps(state) {

  // const blogIds = Object.keys(state.blogs);
  // const allBlogs = blogIds.map(id => {
  //   return { [id]: state.blogs[id] }
  // })

  return { blogs: state.blogs, loading: state.loading };
}

const connectedComponent = connect(mapStateToProps, { getBlogsFromDB });

export default connectedComponent(BlogList);