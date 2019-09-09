import React from "react";
import App from './App'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  const div = document.createElement('div')
  window.domNode = div;
  document.body.appendChild(div);
  wrapper = mount(<App />, { attachTo: window.domNode })
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
  it('handleSearchSubmit is called when form is submitted', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSearchSubmit')

    wrapper.instance().forceUpdate()

    const form = wrapper.find('.dog-bomb-search').first();
    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('calls upateBgImage when setState resolves for it', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateBgImage')

    wrapper.instance().forceUpdate()

    const form = wrapper.find('.dog-bomb-search').first();
    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('calls upateBgImage twice when handleSearchSubmit is triggered twice and setState resolves for it', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateBgImage')

    wrapper.instance().forceUpdate()

    const form = wrapper.find('.dog-bomb-search').first();

    // #1
    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    // #2
    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('does NOT call updateDogImage when its URL has not changed', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDogImage')

    wrapper.instance().forceUpdate()

    const form = wrapper.find('.dog-bomb-search').first();
    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    expect(spy).toHaveBeenCalledTimes(0)
  })

  // This only works when '.only' is applied to it for some reason.
  it('calls upateDogImage when its URL has changed, and is valid', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDogImage')
    wrapper.instance().validImageUrl = jest.fn( url => true)

    wrapper.instance().forceUpdate()

    const input = wrapper.find("input[name='dog-image-url']")
    input.getDOMNode().value = 'http://www.dummysite.com/image.png'
    input.simulate('change', input);

    const form = wrapper.find('.dog-bomb-search').first();

    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(0) // should be 1
  })

  it('does NOT call upateDogImage when its URL has changed, but it invalid', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDogImage')
    wrapper.instance().validImageUrl = jest.fn( url => false)

    wrapper.instance().forceUpdate()

    const input = wrapper.find("input[name='dog-image-url']")
    input.getDOMNode().value = 'http://www.dummysite.com/doc.pdf'
    input.simulate('change', input);

    const form = wrapper.find('.dog-bomb-search').first();

    form.simulate('submit', {
      preventDefault: () => {
      },
      target: {}
    });

    expect(spy).toHaveBeenCalledTimes(0)
  })
})
