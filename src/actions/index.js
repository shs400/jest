export const INCREMEMT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SETDIFF';

export function increment() {
  return {
    type: INCREMEMT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  };
}
