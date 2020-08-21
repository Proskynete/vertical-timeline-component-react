import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Section from '../../src/components/section';

Enzyme.configure({ adapter: new Adapter() });

describe('<Section />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(
			<Section title='title'>
				<div>children</div>
			</Section>,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render compontent with two children props', () => {
		const wrapper = render(<Section title='title'>children</Section>);

		expect(wrapper.find('p')).toHaveLength(1);
		expect(wrapper.find('p').text()).toEqual('title');
		expect(wrapper.find('ul')).toHaveLength(1);
		expect(wrapper.find('ul').text()).toEqual('children');
	});
});
