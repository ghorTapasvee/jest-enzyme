import React from 'react'
import App from './App';
import { shallow } from 'enzyme';

describe('<App/>', () => {
  it('render without crashing', ()=>{
    let wrapper = shallow(<App/>)
    expect(wrapper.exists()).toBe(true)
  })
});
