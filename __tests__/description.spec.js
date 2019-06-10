import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Description from '../src/components/description';

Enzyme.configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('should render with text prop and wihtout optional prop', () => {
    const wrapper = shallow(<Description text="hello" />);
    expect(wrapper.find('.text-description-component').text()).to.be.equal('hello');
  });

  it('should render with text prop and optional prop', () => {
    const wrapper = shallow(<Description text="hello" optional="world" />);
    expect(wrapper.find('.optional-description-component').text()).to.be.equal('world');
  });
});
