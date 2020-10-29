import { takeEvery, put } from 'redux-saga/effects'
import { GET_URL_REQUESTED, GET_URL_SUCCESS } from '../../../constants/types'
import {fetchUrls, linkSaga} from './index'

describe('<linkSaga>', ()=>{
    it('GET_URL_REQUESTED', ()=>{
        let generator = linkSaga()
        expect(generator.next().value).toEqual(takeEvery(GET_URL_REQUESTED, fetchUrls))
        expect(generator.next().done).toBeTruthy()
    })

    it('should dispatch action "GET_URL_SUCCESS" with result from fetch url API', () => {
        let urlEntered = 'www.facebook.com'
        const mockResponse = jest.fn(); 
        const mockResponsePayload = {
            newUrl: mockResponse.url,
            oldUrl: urlEntered
        }
        const generator = fetchUrls({type: GET_URL_REQUESTED, payload: urlEntered});
        generator.next();
        expect(generator.next(mockResponse).value).toEqual(put({type:GET_URL_SUCCESS, payload:mockResponsePayload}))
        expect(generator.next().done).toBeTruthy();
     })
})