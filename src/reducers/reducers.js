import { combineReducers } from 'redux';
import actionTypes from '../actions/types';

let mainState = {
    bp_data: {}
};

const bpDataReducer = (bp_data = mainState.bp_data, action) => {
    switch (action.type) {
      case actionTypes.ACTION_1:
        return action.bp_data;
  
      default:
        return bp_data;
    }
  };

  export default combineReducers({
    bp_data: bpDataReducer
  });