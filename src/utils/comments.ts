import {Comment} from '../components/interfaces';

export const getComments = (array: any[], id: number) => {
  if (Array.isArray(array)) {
    const result = array.find(element => element.id === id);
    return result !== undefined ? result.comments : -1;
  }
  return -1;
};

export const addComment = (array: Comment[], comment: Comment) =>
  Array.isArray(array) ? [...array, comment] : array;
