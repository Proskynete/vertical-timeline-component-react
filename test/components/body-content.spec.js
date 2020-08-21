import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import BodyContent from '../../src/components/body-content';

Enzyme.configure({ adapter: new Adapter() });

describe('<BodyContent />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(
			<BodyContent>
				<div>Child</div>
			</BodyContent>,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render compontent with children prop', () => {
		const wrapper = shallow(
			<BodyContent>
				<div>children</div>
			</BodyContent>,
		);

		expect(wrapper.find('div')).toHaveLength(1);
		expect(wrapper.find('div').text()).toEqual('children');
	});
});
