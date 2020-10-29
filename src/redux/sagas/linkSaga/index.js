// import Axios from 'axios'
import {call, put, takeEvery} from 'redux-saga/effects'
import { GET_URL_REQUESTED } from '../../../constants/types'
import { getUrlFailed, getUrlSuccess } from '../../actions/url'

export function* fetchUrls(action) {
    try{
        function delay(ms) {
            let random = Math.random().toString(36).substring(7)
            return new Promise(resolve => setTimeout(() => resolve({url: `https://bit.ly/${random}`}), ms))
        }
        
        const url = yield call(delay, 1000)
        let urlObjForState = {
            oldUrl: action.payload,
            newUrl: url?.url
        }
        yield put(getUrlSuccess(urlObjForState))
    }catch(e){
        yield put(getUrlFailed(e.message))
    }
}

export function* linkSaga(){
    yield takeEvery(GET_URL_REQUESTED, fetchUrls)
}