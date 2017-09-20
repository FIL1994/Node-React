/**
 * @author Philip Van Raalte
 * @date 2017-09-19.
 */
import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});