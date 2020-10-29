import {all} from 'redux-saga/effects'
import {linkSaga} from './linkSaga'

export default function* rootSaga(){
    yield all([
        linkSaga()
    ])
}