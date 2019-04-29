import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../src/components/content';

Enzyme.configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('should render with text prop and wihtout optional prop', () => {
    const wrapper = shallow(<Content>Hello World</Content>);
    expect(wrapper.children).to.be.a('function');
    expect(wrapper.find('.timeline__container').text()).to.be.equal('Hello World');
  });
});
