import { FILTER_URL_REQUEST, GET_URL_FAILED, GET_URL_REQUESTED, GET_URL_SUCCESS } from "../../constants/types"

export const initialState = {
    urls: [],
    url: null,
    loading: false,
    error: null
}

const urls = (state = initialState, action) => {
    switch(action.type){
        case GET_URL_REQUESTED:
            return{
                ...state,
                loading: true,
                url: null
            }
        case GET_URL_SUCCESS:
            return{
                ...state,
                urls: [...state.urls, action.payload],
                loading: false,
                url: action.payload.newUrl
            }
        case GET_URL_FAILED: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FILTER_URL_REQUEST:
            let updatedUrl = state.urls.filter(urlObj=> urlObj.oldUrl === action.payload)
            if(updatedUrl.length) updatedUrl = updatedUrl[0].newUrl
            else updatedUrl = null
            return {
                ...state,
                url: updatedUrl
            }
        default:
            return state
    }
}

export default urls