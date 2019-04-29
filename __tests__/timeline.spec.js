import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Timeline from '../src/components/timeline';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Timeline Component', () => {
  it('should render with children', () => {
    const wrapper = shallow(<Timeline>Hello</Timeline>);
    expect(wrapper.children).to.be.a('function');
    expect(wrapper.find('.timeline').text()).to.be.equal('Hello');
  });
});
