import { REDUCER_ACTIONS, API_URL } from "../../../config/constants";

export function counterUpdate(value) {
  return {
    type: REDUCER_ACTIONS.COUNTER_UPDATE,
    payload: value
  };
}

