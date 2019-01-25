import * as Types from '../actions';
import { combineReducers } from 'redux';

const counterInitState = {
  value: 0,
  diff: 1
};

const counter = ( state = counterInitState, action) => {
  switch(action.type) {
    case Types.INCREMEMT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      });
    case Types.DECREMENT:
      return Object.assign({}, state, {
        value: state.value <= 0 ? state.value : state.value - state.diff
      });
    case Types.SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
};

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
