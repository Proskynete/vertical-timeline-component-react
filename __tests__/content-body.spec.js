import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import ContentBody from '../src/components/content_body';

Enzyme.configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('should render with text prop and wihtout optional prop', () => {
    const wrapper = shallow(<ContentBody title="2018">Hello World</ContentBody>);
    expect(wrapper.children).to.be.a('function');
    expect(wrapper.find('.title-body-component').text()).to.be.equal('2018');
  });
});
