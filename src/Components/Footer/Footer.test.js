import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('', () => {
  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.Footer').length).toEqual(1);
  });
});
