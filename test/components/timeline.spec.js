import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Timeline from '../../src/components/timeline';

Enzyme.configure({ adapter: new Adapter() });

describe('<Timeline />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(
			<Timeline>
				<div>Child</div>
			</Timeline>,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render compontent with children prop', () => {
		const wrapper = shallow(
			<Timeline>
				<div>children</div>
			</Timeline>,
		);

		expect(wrapper.find('div')).toHaveLength(1);
		expect(wrapper.find('div').text()).toEqual('children');
	});
});
