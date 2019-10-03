import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_BLOGS, SHOW_ERR, SHOW_LOADING } from './actionTypes';
import uuid from 'uuid/v4';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/'

export function addBlog(blog) {
  let newBlog = {
    [uuid()]: { ...blog }
  }
  return {
    type: ADD_BLOG_POST,
    payload: newBlog
  }
}

export function editBlog(blog) {
  return {
    type: EDIT_BLOG_POST,
    payload: blog
  }
}

export function deleteBlog(id) {
  return {
    type: DELETE_BLOG_POST,
    payload: id
  }
}

export function addComment(blogId, comment) {
  return {
    type: ADD_COMMENT,
    payload: { blogId, comment }
  }
}

export function deleteComment(blogId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { blogId, commentId }
  }
}

export function gotBlogs(blogs) {
  return { type: LOAD_BLOGS, blogs }
}

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function startLoad() {
  return { type: SHOW_LOADING };
}

// Thunk actions

export function getBlogsFromDB() {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${BASE_URL}api/posts`);
      console.log("RES from actions", res.data)
      dispatch(gotBlogs(res.data))
    } catch (err) {
      dispatch(showErr(err.response.data));
    }
  }
}