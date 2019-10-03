import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  blogs: {
    "216b435c-e932-49e2-9e07-bfad0e80da96": {
      title: "asdf",
      description: "asdf",
      body: "asdf↵",
      comments: []
    }
  }
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BLOG_POST:
      return { blogs: { ...state.blogs, ...action.payload } }

    case EDIT_BLOG_POST:
      return { blogs: { ...state.blogs, ...action.payload } }

    case DELETE_BLOG_POST:
      let allBlogs = { ...state.blogs };
      delete allBlogs[action.payload];
      return { blogs: allBlogs }

    case ADD_COMMENT:
      let { blogId, comment } = action.payload;
      let blog = state.blogs[blogId];
      delete blog.id;
      let commentId = uuid();

      if (blog.comments) {
        blog.comments.push({ comment, commentId })
      } else {
        blog.comments = [{ comment, commentId }]
      }
      return { blogs: { ...state.blogs, [blogId]: blog } }

    case DELETE_COMMENT:
      let commId = action.payload.commentId;
      let blId = action.payload.blogId;
      let modBlog = { ...state.blogs[blId] };
      let modComments = modBlog.comments.filter(c => c.commentId !== commId);
      modBlog.comments = modComments;
      delete modBlog.id;
      return { blogs: { ...state.blogs, [blId]: modBlog } }

    default:
      return state
  }

}

export default rootReducer;