import {combineReducers} from 'redux';
import {spreadReducers} from './spreadReducers';
 import {objectAssignReducers as OAreducers} from './objectAssignReducers';


export default combineReducers({
 spreadReducers,
  OAreducers
});