import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../../../src/components/timeline';
import { Events } from '../../../src/components/events';
import { Event } from '../../../src/components/event';

describe('Timeline', () => {
	test('should create a snapshot of timeline component', async () => {
		const component = render(
			<Timeline>
				<Events title="I'm a title" startDate="2019/01/01" today>
					<Event title="I'm a event title" description={["I'm a description"]} />
				</Events>
			</Timeline>,
		);

		expect(component).toMatchSnapshot();
	});

	test('should render only one container but with endDate prop', () => {
		render(
			<Timeline collapse>
				<Events title="I'm a title" startDate="2019/01/01" endDate="2020/01/01">
					<Event title="I'm a event title" description={["I'm a description"]} />
				</Events>
			</Timeline>,
		);
	});

	test('should render timeline with all custom props', async () => {
		const theme = {
			yearColor: '#000000',
			lineColor: '#000000',
			dotColor: '#000000',
			borderDotColor: '#000000',
			titleColor: '#000000',
			subtitleColor: '#000000',
			textColor: '#000000',
		};

		render(
			<Timeline lang="es" theme={theme} dateFormat="with-weekday" collapse withoutDay>
				<Events title="I'm a title" startDate="2019/01/01" endDate="2020/01/01">
					<Event title="I'm a event title" description={["I'm a description"]} />
				</Events>
			</Timeline>,
		);
	});

	test('should hide description when user has click on title event', async () => {
		render(
			<Timeline collapse>
				<Events title="I'm a title" startDate="2019/01/01" today>
					<Event title="I'm a event title" description={["I'm a description"]} />
				</Events>
			</Timeline>,
		);

		const title = screen.getByText("I'm a title");
		const eventTitle = screen.getByText("I'm a event title");
		const description = screen.getByText("I'm a description");

		expect(title).toBeInTheDocument();
		expect(eventTitle).toBeInTheDocument();
		expect(description).toBeInTheDocument();

		await userEvent.click(eventTitle);
		expect(eventTitle).toHaveStyle('cursor: pointer');

		await userEvent.click(eventTitle);
		expect(description).not.toBeInTheDocument();
	});

	test('should change styles with customStyles props', async () => {
		render(
			<Timeline
				customStyles={{
					title: { color: 'red' },
					event: { color: 'red' },
					date: { color: 'red' },
					description: { color: 'red' },
				}}
			>
				<Events title="I'm a title" startDate="2019/01/01" today>
					<Event title="I'm a event title" description={["I'm a description"]} />
				</Events>
			</Timeline>,
		);

		const title = screen.getByText("I'm a title");
		const eventTitle = screen.getByText("I'm a event title");
		const description = screen.getByText("I'm a description");

		expect(title).toHaveStyle('color: red');
		expect(eventTitle).toHaveStyle('color: red');
		expect(description).toHaveStyle('color: red');
	});
});
