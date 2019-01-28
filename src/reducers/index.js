import * as Types from '../actions';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

const counterInitState = Map({
  value: 0,
  diff: 1
});

const counter = ( state = counterInitState, action) => {
  switch(action.type) {
    case Types.INCREMEMT:
      return state.update('value', () => state.get('value') + state.get('diff'));
    case Types.DECREMENT:
      const minDecrement = state.get('value') <= 0 ? state.get('value') : state.get('value') - state.get('diff');
      return state.update('value', () => minDecrement);
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
