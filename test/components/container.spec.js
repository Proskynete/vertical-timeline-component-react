import React from 'react';
import Enzyme from 'enzyme';
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
});
