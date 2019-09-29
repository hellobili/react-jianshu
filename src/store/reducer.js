import {combineReducers} from 'redux-immutable';
import {reducer as header}  from '../common/header/store';

// export default combineReducers({
//   header:HeaderReducer
// })

const reducer = combineReducers({
  header:header
})

export default reducer