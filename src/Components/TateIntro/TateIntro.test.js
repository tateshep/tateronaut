import React from 'react';
import { shallow } from 'enzyme';
import { TateIntro } from './TateIntro';

describe('', () => {

  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<TateIntro />);
    expect(wrapper.find('.tate-intro').length).toEqual(1);
  });
  // it('when it successfully renders it renders 5 stars', () => {
  //   const wrapper = shallow(<TateIntro />);
  //   expect(wrapper.find('.stars-icon').length).toEqual(5);
  // });
});
