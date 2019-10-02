import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';

function mapStateToProps(state) {

  let blogIds = Object.keys(state.blogs);
  let allBlogs = blogIds.map(id => {
    return { [id]: state.blogs[id] }
  })

  return { blogs: allBlogs };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BlogList);