import React from "react";
import ReactDOM from 'react-dom';
import App from './App'
import { create, act } from "react-test-renderer";
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// let root;

// act(() => {
//   root = create(<App />)
// })

configure({ adapter: new Adapter() });

describe('on componentDidMount', () => {
  test('defaults are loaded properly', () => {
    let wrapper = shallow(<App />)
  })
})
