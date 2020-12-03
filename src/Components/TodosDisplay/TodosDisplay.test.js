import React from 'react';
import { shallow } from 'enzyme';
import { TodosDisplay } from './TodosDisplay';

describe('TodosDisplay', () => {
  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<TodosDisplay />);
    expect(wrapper.find('.todos').length).toEqual(1);
  });
});
