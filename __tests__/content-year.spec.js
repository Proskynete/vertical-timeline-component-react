import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import ContentYear from '../src/components/content_year';

Enzyme.configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('should render with text prop and wihtout optional prop', () => {
    const wrapper = shallow(<ContentYear startYear="2018" />);
    expect(wrapper.find('.item-year-component').text()).to.be.equal('2018');
  });

  it('should render with startYear and currentYear', () => {
    const wrapper = shallow(<ContentYear startYear="2018" currentYear />);
    expect(
      wrapper
        .find('.item-year-component')
        .at(0)
        .text(),
    ).to.be.equal('2020');
    expect(
      wrapper
        .find('.item-year-component')
        .at(1)
        .text(),
    ).to.be.equal('2018');
  });

  it('should render with startMonth and default type', () => {
    const wrapper = shallow(<ContentYear startYear="2018" startMonth="1" />);
    expect(wrapper.find('.item-year-component').text()).to.be.equal('01-2018');
  });

  it('should render with startMonth and text type', () => {
    const wrapper = shallow(
      <ContentYear startYear="2018" startMonth="1" monthType="text" />,
    );
    expect(wrapper.find('.item-year-component').text()).to.be.equal(
      'Jan, 2018',
    );
  });

  it('should render full date with nonth, day, year and default type', () => {
    const wrapper = shallow(
      <ContentYear startYear="2018" startMonth="1" startDay="12" />,
    );

    expect(wrapper.find('.item-year-component').text()).to.be.equal(
      '01-12-2018',
    );
  });

  it('should render full date with nonth, day and year and text type', () => {
    const wrapper = shallow(
      <ContentYear
        startYear="2018"
        startMonth="1"
        startDay="12"
        monthType="text"
      />,
    );

    expect(wrapper.find('.item-year-component').text()).to.be.equal(
      'Jan 12, 2018',
    );
  });
});
