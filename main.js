import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

// import and make middleware
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

// import { helloSaga } from './sagas/logger';
import logger from './sagas/logger';

import App from './App'
import reducer from './reducers'

// apply sagaMiddleware
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// run the sagaMiddleware
sagaMiddleware.run(logger)

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <App
        value={ store.getState() }
        onIncrement={ () => action('INCREMENT') }
        onDecrement={ () => action('DECREMENT') }
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
