import { AsyncStorage } from 'react-native';
import { put, call } from 'redux-saga/effects'
import { REDUCER_ACTIONS } from '../../../config/constants';
import { loginApi } from './actions';

export function* fetchUser(action) {
    try {
        let apiResult = yield call(loginApi, action);
        if (apiResult.isSuccess) {
            yield put({ type: REDUCER_ACTIONS.LOGIN_SUCCESS, payload: apiResult.data })
            const { props } = action.payload;
            AsyncStorage.setItem("status", "true");
            props.navigation.navigate('Auth');
        }
        else {
            yield put({ type: REDUCER_ACTIONS.LOGIN_ERROR, payload: null });
        }
    } catch (e) {
        yield put({ type: REDUCER_ACTIONS.LOGIN_ERROR, payload: null });
    }
}