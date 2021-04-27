import { combineReducers } from 'redux';
import homeReducer from './home/reducer';

import loginReducer from './login/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    home: homeReducer,
});

export default rootReducer;