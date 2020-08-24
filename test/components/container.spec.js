import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Container from '../../src/components/container';

Enzyme.configure({ adapter: new Adapter() });

describe('<Container />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(
			<Container>
				<div>First child</div>
				<div>Second child</div>
			</Container>,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render compontent with two children props', () => {
		const wrapper = shallow(
			<Container>
				<div>First children</div>
				<div>Second children</div>
			</Container>,
		);

		expect(wrapper.find('div')).toHaveLength(2);
		expect(wrapper.text().includes('First children')).toBeTruthy();
		expect(wrapper.text().includes('Second children')).toBeTruthy();
	});
});
