import {GET_URL_SUCCESS, GET_URL_REQUESTED, GET_URL_FAILED, FILTER_URL_REQUEST} from '../../constants/types'

export const getUrlRequest = (url) =>( {
    type: GET_URL_REQUESTED,
    payload: url
})

export const filterExistingUrl = (url) =>( {
    type: FILTER_URL_REQUEST,
    payload: url
})

export const getUrlSuccess = (url) =>( {
    type: GET_URL_SUCCESS,
    payload: url
})

export const getUrlFailed = (message) =>( {
    type: GET_URL_FAILED,
    payload: message
})
