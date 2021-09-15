import {createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger';


import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './root-saga';


import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger)
}


 const store = createStore(rootReducer,
    applyMiddleware(...middlewares));

 sagaMiddleware.run(rootSaga)   

const persistor = persistStore(store);

export  {store,persistor};



