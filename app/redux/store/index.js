import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import thunk from 'redux-thunk'

let middleware = [thunk];
// const sagaMiddleware = createSagaMiddleware()
// let middleware = [sagaMiddleware];

export default function configureStore(initialState) { 
   const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware),
    );
    // sagaMiddleware.run(rootSaga) --> control goes to rootSaga whenever action is dispatched - jevo aa run thase atle 
    return store;
}

