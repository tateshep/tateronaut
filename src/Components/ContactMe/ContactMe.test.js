import React from 'react';
import { shallow } from 'enzyme';
import { ContactMe } from './ContactMe';

describe('', () => {
  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<ContactMe />);
    expect(wrapper.find('.contact-me').length).toEqual(1);
  });
});
