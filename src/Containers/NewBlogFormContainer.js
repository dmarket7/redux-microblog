import { connect } from 'react-redux';
import { addBlog } from '../actions';
import NewBlogForm from '../Components/NewBlogForm';

function mapStateToProps(state) {
    return { blogs: state.blogs }
}

const connectedComponent = connect(
  mapStateToProps,
  { addBlog }
);

export default connectedComponent(NewBlogForm);
