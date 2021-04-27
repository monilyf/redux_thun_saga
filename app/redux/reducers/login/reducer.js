import { REDUCER_ACTIONS } from "../../../config/constants";

const INITIAL_STATE = {
    userData: null
}

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.LOGIN_SUCCESS:
            return { ...state, userData: action.payload }
        case REDUCER_ACTIONS.SIGNUP_ERROR:
            return { ...state, userData: action.payload }
        default:
            return state;
    }
}
