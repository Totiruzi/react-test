import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

const url = 'http://jsonplaceholder.typicode.com/comments'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get(url);
  return  {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
