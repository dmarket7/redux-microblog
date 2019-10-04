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
    case EDIT_BLOG_POST:
      return { ...state, currentBlog: action.blog, loading: null }

    case ADD_COMMENT:
      let blogWithNewComment = { ...state.currentBlog }
      console.log("blog with comments", state)
      blogWithNewComment.comments = [...blogWithNewComment.comments, action.comment]
      return { ...state, currentBlog: blogWithNewComment, loading: null }

    case DELETE_COMMENT:
      let commId = action.payload.commentId;
      // let blId = action.payload.blogId;
      let currBlog = { ...state.currentBlog };
      currBlog.comments = currBlog.comments.filter(c => c.id !== commId)
      console.log("Current blog", currBlog)
      return { ...state, loading: null, currentBlog: currBlog }

    case SHOW_LOADING:
      return { ...state, loading: "Loading..." }

    case LOAD_BLOGS:
      return { ...state, blogs: action.blogs, loading: null }

    case SHOW_ERR:
      return { ...state, error: "Couldn't find your blog posts :(", loading: null }

    case LOAD_BLOG:
      return { ...state, blogs: state.blogs, currentBlog: action.blog, loading: null }

    default:
      return state
  }

}

export default rootReducer;