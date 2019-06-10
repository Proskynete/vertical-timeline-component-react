import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Timeline from '../src/components/timeline';

Enzyme.configure({ adapter: new Adapter() });

describe('Timeline Component', () => {
  it('should render with children', () => {
    const wrapper = shallow(<Timeline>Hello</Timeline>);
    expect(wrapper.children).to.be.a('function');
    expect(wrapper.find('.timeline-component').text()).to.be.equal('Hello');
  });
});
