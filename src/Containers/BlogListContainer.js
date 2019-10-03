import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';

function mapStateToProps(state) {

  const blogIds = Object.keys(state.blogs);
  const allBlogs = blogIds.map(id => {
    return { [id]: state.blogs[id] }
  })

  return { blogs: allBlogs };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BlogList);