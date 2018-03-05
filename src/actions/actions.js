import * as api from '../api/api';
import actionTypes from './types';
import _ from 'lodash';

export const sampleActionDispatcher = () => dispatch => 
    api.getAllData()
        .then(books => dispatch(sampleActionSuccessHandler(books)))
        .catch(error => dispatch(sampleActionErrorHandler(error)));

const sampleActionSuccessHandler = books => ({
    type: actionTypes.ACTION_1,
    bp_data: books,
  });


  const sampleActionErrorHandler = error => ({
    type: actionTypes.ACTION_1,
    bp_data: error,
  });  

