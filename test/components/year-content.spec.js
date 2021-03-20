import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import YearContent from '../../src/components/year-content';
import { ConfigContext } from '../../src/context/config.context';

Enzyme.configure({ adapter: new Adapter() });

describe('<YearContent />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(
			<ConfigContext.Provider value={{ lang: 'en', dateFormat: 'L' }}>
				<YearContent startDate='2020/08/21' />
			</ConfigContext.Provider>,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render component with startDate props', () => {
		const wrapper = render(
			<ConfigContext.Provider value={{ lang: 'en', dateFormat: 'L' }}>
				<YearContent startDate='2020/08/21' />
			</ConfigContext.Provider>,
		);

		expect(wrapper.find('span').text()).toEqual('From');
		expect(wrapper.find('time').text()).toEqual('08/21/2020');
	});

	it('should render component with startDate and currentYear props', () => {
		const wrapper = render(
			<ConfigContext.Provider value={{ lang: 'en', dateFormat: 'L' }}>
				<YearContent startDate='2019/08/21' currentYear />
			</ConfigContext.Provider>,
		);

		expect(wrapper.find('span')).toHaveLength(1);
		expect(wrapper.find('span').text()).toEqual('From');

		expect(wrapper.find('time')).toHaveLength(2);
		expect(wrapper.find('time').text().includes('2021')).toBeTruthy();
		expect(wrapper.find('time').text().includes('08/21/2019')).toBeTruthy();
	});

	it('should render component with startDate and endDate props', () => {
		const wrapper = render(
			<ConfigContext.Provider value={{ lang: 'en', dateFormat: 'L' }}>
				<YearContent startDate='2019/08/21' endDate='2020/08/21' />
			</ConfigContext.Provider>,
		);

		expect(wrapper.find('span')).toHaveLength(2);
		expect(wrapper.find('span').text().includes('From')).toBeTruthy();
		expect(wrapper.find('span').text().includes('To')).toBeTruthy();

		expect(wrapper.find('time')).toHaveLength(2);
		expect(wrapper.find('time').text().includes('08/21/2020')).toBeTruthy();
		expect(wrapper.find('time').text().includes('08/21/2019')).toBeTruthy();
	});
});
