import {
  EDIT_BLOG_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_BLOGS,
  SHOW_ERR, SHOW_LOADING, LOAD_BLOG, UP_VOTE, DOWN_VOTE
} from './actionTypes';

const INITIAL_STATE = {
  blogs: [],
  currentBlog: {},
  loading: null,
  error: null
}

function rootReducer(state = INITIAL_STATE, action) {
  // make this async and update -- state = await getDataFromDB()
  switch (action.type) {
    case EDIT_BLOG_POST:
      return { ...state, currentBlog: { ...action.blog }, loading: null, error: null }

    case ADD_COMMENT:
      let blogWithNewComment = { ...state.currentBlog }
      blogWithNewComment.comments = [...blogWithNewComment.comments, { ...action.comment }]
      return { ...state, currentBlog: blogWithNewComment, loading: null, error: null }

    case DELETE_COMMENT:
      let commId = action.payload.commentId;
      let currBlog = { ...state.currentBlog };
      currBlog.comments = currBlog.comments.filter(c => c.id !== commId)
      return { ...state, loading: null, error: null, currentBlog: currBlog }

    case UP_VOTE:
      let curBlog;
      if(state.currentBlog.id){
        curBlog = { ...state.currentBlog }
        curBlog.votes = action.votes;
      } else {
        curBlog = {};
      }

      let blogs = [...state.blogs];
      blogs = blogs.map(b => {
        if (b.id === action.blogId) {
          b.votes = action.votes;
        }
        return b;
      })
      return { ...state, loading: null, error: null, blogs, currentBlog: curBlog }

    case DOWN_VOTE:
      let cBlog;
      if(state.currentBlog.id){
        cBlog = { ...state.currentBlog }
        cBlog.votes = action.votes;
      } else {
        cBlog = {};
      }
      let dBlogs = [...state.blogs];
      dBlogs = dBlogs.map(b => {
        if (b.id === action.blogId) {
          b.votes = action.votes;
        }
        return b;
      })
      return { ...state, loading: null, error: null, blogs: dBlogs, currentBlog: cBlog }

    case SHOW_LOADING:
      return { ...state, loading: "Loading..." }

    case LOAD_BLOGS:
      return { ...state, blogs: [...action.blogs], currentBlog: {}, loading: null, error: null }

    case SHOW_ERR:
      return { ...state, error: "Couldn't find your blog posts :(", loading: null }

    case LOAD_BLOG:
      return { ...state, blogs: state.blogs, currentBlog: { ...action.blog }, loading: null, error: null }

    default:
      return state
  }

}

export default rootReducer;