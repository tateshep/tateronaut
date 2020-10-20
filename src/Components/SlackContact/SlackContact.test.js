import React from 'react';
import { shallow } from 'enzyme';
import { SlackContact } from './SlackContact';

describe('', () => {
  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<SlackContact />);
    expect(wrapper.find('.slack-contact').length).toEqual(1);
  });
});
