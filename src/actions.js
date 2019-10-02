import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import uuid from 'uuid/v4';

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

export function deleteComment(blogId, comment) {
  return {
    type: DELETE_COMMENT,
    payload: { blogId, comment }
  }
}