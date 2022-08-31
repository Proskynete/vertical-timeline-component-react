import React from 'react';
import { render } from '@testing-library/react';
import { Timeline } from '../../../src/components/timeline';
import { Container } from '../../../src/components/container';
import { Content } from '../../../src/components/content';

describe('Timeline', () => {
	test('should create a snapshot of timeline component', async () => {
		const component = render(
			<Timeline>
				<Container title="I'm a title" startDate="2019/01/01" today>
					<Content title="I'm a event title" description={["I'm a description"]} />
				</Container>
			</Timeline>,
		);

		expect(component).toMatchSnapshot();
	});
});
