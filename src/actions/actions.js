import * as api from '../api/api';
import actionTypes from './types';
import _ from 'lodash';

export const sampleActionDispatcher = () => ({
    type: actionTypes.ACTION_1,
    bp_data: api.getAllData(),
});