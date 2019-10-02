import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

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

function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_BLOG_POST:
      return { blogs: { ...state.blogs, ...action.payload } }
    
    case EDIT_BLOG_POST:
      return { blogs: { ...state.blogs, ...action.payload } }

    case DELETE_BLOG_POST:
      return 'something'

    case ADD_COMMENT:
      return 'something'

    case DELETE_COMMENT:
      return 'something'
      
    default:
      return state
  }
}

export default rootReducer;