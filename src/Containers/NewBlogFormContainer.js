import { connect } from 'react-redux';
import { addBlogToDB } from '../actions';
import NewBlogForm from '../Components/NewBlogForm';

function mapStateToProps(state) {
    return { blogs: state.blogs }
}

const connectedComponent = connect(
  mapStateToProps,
  { addBlogToDB }
);

export default connectedComponent(NewBlogForm);
