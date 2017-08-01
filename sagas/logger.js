import { select, fork, takeEvery } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* stateLogger({ type }) {
    const state = yield select();
    console.log(type, 'ACTION TAKEN');
    console.log(state, 'STATE AFTER ACTION');
}

export default function*() {
    yield [
        fork(helloSaga),
        takeEvery('*', stateLogger)
    ];
}