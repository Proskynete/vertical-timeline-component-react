import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Timeline from '../../src/components/timeline';

Enzyme.configure({ adapter: new Adapter() });

describe('<Timeline />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(<Timeline>childen</Timeline>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render component', () => {
		const wrapper = shallow(<Timeline>Hello</Timeline>);
		expect(wrapper.children).toBeInstanceOf(Function);
	});
});
