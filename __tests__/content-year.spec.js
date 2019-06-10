import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import ContentYear from '../src/components/content_year';

Enzyme.configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('should render with text prop and wihtout optional prop', () => {
    const wrapper = shallow(<ContentYear year="hello" />);
    expect(wrapper.find('.item-year-component').text()).to.be.equal('hello');
  });
});
