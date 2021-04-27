import { AsyncStorage } from "react-native";
import { REDUCER_ACTIONS, API_URL } from "../../../config/constants";
export function loginProcess(props) {
  // return {
  //   type: REDUCER_ACTIONS.LOGIN_INIT,
  //   payload: { props }
  // };

  return loginInitiate(props);
}

const loginInitiate = (props) => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        var jsonObj = {}
        jsonObj.data = json;
        jsonObj.isSuccess = true;
        dispatch(successResponse(jsonObj));

        AsyncStorage.setItem("status", "true");
        props.navigation.navigate('Auth');

      }).catch(err => {
        var jsonObj = {}
        jsonObj.isSuccess = false;
        dispatch(errorResponse(null));
      })
  };
}

const successResponse = (data) => {
  return {
    type: REDUCER_ACTIONS.LOGIN_SUCCESS,
    payload: data.data
  };
}
const errorResponse = (data) => {
  return {
    type: REDUCER_ACTIONS.LOGIN_ERROR,
    payload: data
  };
}

export async function loginApi(action) {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      var jsonObj = {}
      jsonObj.data = json;
      jsonObj.isSuccess = true;
      return jsonObj;
    }).catch(err => {
      var jsonObj = {}
      jsonObj.isSuccess = false;
    })
}
