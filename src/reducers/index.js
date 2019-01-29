import * as Types from '../actions';
import { combineReducers } from 'redux';
import { produce } from 'immer';

const counterInitState = {
  value: 0,
  diff: 1
};

const counter = produce((draft, action) => {
  switch(action.type) {
    case Types.INCREMEMT:
      return {
        value: draft.value + draft.diff,
        diff: draft.diff
      }
    case Types.DECREMENT:
      const minDecrement = draft.value <= 0 ? draft.value : draft.value - draft.diff;
      return {
        value: minDecrement,
        diff: draft.diff
      }
    case Types.SET_DIFF:
      return {
        value: draft.value,
        diff: draft.diff
      }
    default:
      return draft;
  }
}, counterInitState);

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const counterApp = combineReducers({
  counter,
  extra
});
export default counterApp;
