import React from 'react';
import { render, screen } from '@testing-library/react';
import { Validate } from '../../../src/components/validate';

const ComponentToValidate = () => <div>ComponentToValidate</div>;

describe('Validate', () => {
	test('should create a snapshot of timeline component', async () => {
		const component = render(
			<Validate componentToValidate={ComponentToValidate}>
				<ComponentToValidate />
			</Validate>,
		);
		expect(component).toMatchSnapshot();
	});

	test('should render error message when the component has not children', async () => {
		render(<Validate componentToValidate={ComponentToValidate} />);

		expect(
			screen.getByText(/You need at least one to correctly render this component/),
		).toBeInTheDocument();
	});

	test('should render error message when the component has more than one children', async () => {
		render(
			<Validate componentToValidate={ComponentToValidate}>
				<p>I'm other component</p>
			</Validate>,
		);

		expect(
			screen.getByText(/This component only supports components as children/),
		).toBeInTheDocument();
	});

	test('should render only allow children coponents', async () => {
		render(
			<Validate componentToValidate={ComponentToValidate}>
				<p>I'm other component</p>
				<ComponentToValidate />
			</Validate>,
		);

		expect(screen.getByText(/ComponentToValidate/)).toBeInTheDocument();
	});
});
