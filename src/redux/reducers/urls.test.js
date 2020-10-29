import { FILTER_URL_REQUEST, GET_URL_FAILED, GET_URL_REQUESTED, GET_URL_SUCCESS } from '../../constants/types'
import urls, {initialState} from './urls'

describe('<Url reducers>', ()=>{

    let payloadObject = {
        oldUrl: 'www.faceebook.com',
        newUrl: 'www.bit.ly/sdnikn'
    }

    it('default state return', ()=>{
        let reducer = urls(undefined, {})
        expect(reducer).toBe(initialState)
    })

    it('GET_URL_REQUESTED', ()=>{
        let action = {
            type:GET_URL_REQUESTED
        }
        let response = {
            ...initialState,
            loading: true,
            url: null
        }
        let reducer = urls(undefined, action)
        expect(reducer).toStrictEqual(response)
    })

    
    it('GET_URL_SUCCESS', ()=>{
        
        let action = {
            type:GET_URL_SUCCESS,
            payload: payloadObject
        }
        let response = {
            ...initialState,
            loading: false,
            urls: [...initialState.urls, action.payload],
            url: payloadObject.newUrl
        }
        let reducer = urls(undefined, action)
        expect(reducer).toStrictEqual(response)
    })

    
    it('GET_URL_FAILED', ()=>{
        let action = {
            type:GET_URL_FAILED,
            payload: 'error'
        }
        let response = {
            ...initialState,
            loading: false,
            error: action.payload
        }
        let reducer = urls(undefined, action)
        expect(reducer).toStrictEqual(response)
    })

    it('FILTER_URL_REQUEST', ()=>{
        let initalUpdatedState = {
            ...initialState,
            urls: [...initialState.urls, payloadObject]
        }
        let action = {
            type:FILTER_URL_REQUEST,
            payload: payloadObject.oldUrl
        }
        let response = {
            ...initalUpdatedState,
            url: payloadObject.newUrl
        }
        let reducer = urls(initalUpdatedState, action)
        expect(reducer).toStrictEqual(response)
    })
})