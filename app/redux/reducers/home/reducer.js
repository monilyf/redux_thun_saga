import { REDUCER_ACTIONS } from "../../../config/constants";

const INITIAL_STATE = {
    counter: 0
}

export default function homeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.COUNTER_UPDATE:
            return { ...state, counter: action.payload }
        default:
            return state;
    }
}
