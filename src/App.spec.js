import React from "react";
import App from './App'
// import { create } from "react-test-renderer";
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)
});

it('loads the App properly', () => {
  expect(wrapper).toMatchSnapshot()
})

describe('on componentDidshallow', () => {
  it('loads defaults properly', () => {
    expect(wrapper.state().dogImageUrl).toBe('https://i.imgur.com/iOvgJti.png')
    expect(wrapper.state().imageQuery).toBe('wedding')
  })

  it('loads the form, and the dog-bomb elements', () => {
    expect(wrapper.find('.dog-bomb-search')).toBeTruthy()
    expect(wrapper.find('.dog-bomb')).toBeTruthy()
  })

  it('loads the correct default dog image url in the form', () => {
    const dogImageUrl = wrapper.find("input[name='dog-image-url']").get(0).props.defaultValue
    expect(dogImageUrl).toBe(wrapper.state().dogImageUrl)
  })

  it('loads the correct default query category in the form', () => {
    const imageQuery = wrapper.find("input[name='image-query']").get(0).props.defaultValue
    expect(imageQuery).toBe(wrapper.state().imageQuery)
  })
})

describe('on form submit', () => {
  it.only('goes through validating the search query', () => {
    const spyHandleSearchSubmit = jest.spyOn(wrapper.instance(), 'handleSearchSubmit')

    wrapper.instance().forceUpdate();

    wrapper.find(".dog-bomb-search .btn").simulate('click')
    debugger
    expect(spyHandleSearchSubmit).toHaveBeenCalled()
  })
})
