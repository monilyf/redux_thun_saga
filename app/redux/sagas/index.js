import { takeLatest } from 'redux-saga/effects'
import { REDUCER_ACTIONS } from '../../config/constants'
import { fetchUser } from '../reducers/login/saga';

function* rootSaga() {
   yield takeLatest(REDUCER_ACTIONS.LOGIN_INIT, fetchUser);
}

export default rootSaga;
