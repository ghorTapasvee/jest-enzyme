import { shallow } from 'enzyme'
import React from 'react'
// import { Provider } from 'react-redux'
import * as ReactRedux from 'react-redux'
import LinkShortener from './index'
import configureStore from 'redux-mock-store'
import saga from 'redux-saga'
import * as redux from 'redux'
import { urlsState } from '../../constants/types'
import { getUrlRequest } from '../../redux/actions/url'

let store = configureStore()({
            urls: {
                url: null, 
                urls: [], 
                loading: false, 
                error: null
            }
        })

// jest.mock("react-redux", () => ({
//     ...jest.requireActual('react-redux'),
//     useSelector: jest.fn(fn => fn()),
//     useDispatch: () => jest.fn()
// }));

// jest.mock('../../constants/types')

// describe('<LinkShortener/>', ()=>{
//     const initialState = {
//         urls: {
//             url: null, 
//             urls: [], 
//             loading: false, 
//             error: null
//         }
//     }
    
//     let wrapper = null, store

//     beforeEach(()=>{
//         store = mockStore(initialState)
//         urlsState.mockReturnValue(initialState)
//         wrapper = shallow(<Provider store={store}><LinkShortener/></Provider>).childAt(0).dive()
//         // wrapper = shallow(<LinkShortener/>)
//     })

//     it('form, input fields and button rendering', ()=>{
//         let inputForm = wrapper.find(`[data-test="linkshortener__form"]`)
//         let inputField = wrapper.find(`[data-test="linkshortener__input"]`)
//         expect(inputForm.exists()).toBe(true);
//         expect(inputField.exists()).toBe(true);
//         expect(wrapper.find('button').exists()).toBe(true);
//     })

//     it('on submit button press', ()=>{
//         let dummyUrl = 'www.facebook.com'
//         let inputForm = wrapper.find(`[data-test="linkshortener__form"]`)
//         let inputField = wrapper.find(`[data-test="linkshortener__input"]`)
//         let button = wrapper.find(`button`)
//         inputField.value = dummyUrl
//         expect(inputField.value).toBe(dummyUrl);
//         button.simulate('click')
//         inputForm.simulate('submit', { preventDefault: () => console.log('preventDefault') })
//         // let currentState = {
//         //     // ...initialState, 
//         //     // urls: {
//         //         ...initialState.urls, 
//         //         urls: [{oldUrl: dummyUrl, newUrl: 'www.bit.ly/dsdsvsv'}], 
//         //         url:'www.bit.ly/dsdsvsv'
//         //     // }
//         // }

//         // console.log('+++++', currentState)
//         // store.dispatch(getUrlRequest(dummyUrl))
//         // expect(wrapper.find(`[data-test="linkshortener__url"]`).length).toBe(1);
//     })

// })

describe('<>', ()=>{
    let wrapper = null, store

    let renderWrapper = (state) => {
        store = configureStore()(state)
    jest.spyOn(ReactRedux, "useSelector").mockImplementation(state => store.getState());
    const spyOnUseDispatch = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(()=>store.dispatch)
    wrapper = shallow(<ReactRedux.Provider store={store}><LinkShortener/></ReactRedux.Provider>).childAt(0).dive()
    // wrapper = shallow(<LinkShortener/>)
    }
    beforeEach(()=>{
        renderWrapper({
            url: null, 
            urls: [], 
            loading: false, 
            error: null
        })
    })
    it('clicking submit  button', ()=>{
        let dummyUrl = 'www.facebook.com'
        let inputForm = wrapper.find(`[data-test="linkshortener__form"]`)
        let inputField = wrapper.find(`[data-test="linkshortener__input"]`)
        let button = wrapper.find(`button`)
        inputField.value = dummyUrl
        expect(inputField.value).toBe(dummyUrl);
        button.simulate('click')
        // inputForm.simulate('submit', { preventDefault: () => console.log('preventDefault') })
        expect(wrapper.find('[data-test="linkshortenter__url"]').length).toBe(0)
    })

    it('getting the shortening url filled', ()=>{
        renderWrapper({
            url: 'www.bit.ly/hsdksn', 
            urls: [], 
            loading: false, 
            error: null
        })
        expect(wrapper.find(`[data-test="linkshortener__url"]`).length).toBe(1)
    })
})