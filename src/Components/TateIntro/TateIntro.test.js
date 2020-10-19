import React from 'react';
import { shallow } from 'enzyme';
import { TateIntro } from './TateIntro';

describe('', () => {

  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<TateIntro />);
    expect(wrapper.find('.tate-intro').length).toEqual(1);
  });
});
