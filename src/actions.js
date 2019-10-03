import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_BLOGS, SHOW_ERR, SHOW_LOADING, LOAD_BLOG } from './actionTypes';
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
    id
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

function gotBlogs(blogs) {
  return { type: LOAD_BLOGS, blogs }
}

function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

function startLoad() {
  return { type: SHOW_LOADING };
}

function gotBlog(blog) {
  return { type: LOAD_BLOG, blog }
}

// Thunk actions

export function getBlogsFromDB() {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${BASE_URL}api/posts`);
      dispatch(gotBlogs(res.data));
    } catch (err) {
      dispatch(showErr(err.response.data));
    }
  }
}

export function getBlogFromDB(id) {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${BASE_URL}api/posts/${id}`);
      dispatch(gotBlog(res.data));
    } catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

export function deleteBlogFromDB(id) {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      await axios.delete(`${BASE_URL}api/posts/${id}`);
    } catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}