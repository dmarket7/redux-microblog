import {
  ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST,
  ADD_COMMENT, DELETE_COMMENT, LOAD_BLOGS,
  SHOW_ERR, SHOW_LOADING, LOAD_BLOG
} from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  blogs: [],
  currentBlog: {}
  // blogs: {
  //   "216b435c-e932-49e2-9e07-bfad0e80da96": {
  //     title: "asdf",
  //     description: "asdf",
  //     body: "asdf↵",
  //     comments: []
  //   }
  // }
}

// function that grabs from DB and sets INITIAL_STATE ->> getDataFromDB()

function rootReducer(state = INITIAL_STATE, action) {
  // make this async and update -- state = await getDataFromDB()
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

    case SHOW_LOADING:
      return { loading: "Loading..." }

    case LOAD_BLOGS:
      return { blogs: action.blogs }

    case SHOW_ERR:
      return { error: "Couldn't find your blog posts :(" }

    case LOAD_BLOG:
      return { blogs: state.blogs, currentBlog: action.blog }

    default:
      return state
  }

}

export default rootReducer;