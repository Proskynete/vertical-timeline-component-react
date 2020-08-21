import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Description from '../../src/components/description';

Enzyme.configure({ adapter: new Adapter() });

describe('<Description />', () => {
	it('should create Snapshot', () => {
		const component = renderer.create(<Description text='text' />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render compontent with default li element and text props', () => {
		const wrapper = shallow(<Description text='text' />);

		expect(wrapper.text().includes('text')).toBeTruthy();
	});

	it('should render compontent with subtitle variant and text props', () => {
		const wrapper = shallow(
			<Description variant='subtitle' text='subtitle text' />,
		);

		expect(wrapper.text().includes('subtitle text')).toBeTruthy();
	});
});
