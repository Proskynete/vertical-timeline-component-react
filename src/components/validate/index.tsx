import React, { PropsWithChildren } from 'react';
import { ErrorMessage } from '../error-message';

type ValidateProps = {
	componentToValidate: React.JSXElementConstructor<any>;
} & { [key: string]: any };

const Validate = ({
	children,
	componentToValidate,
	...otherProps
}: PropsWithChildren<ValidateProps>) => {
	const count = children && React.Children.count(children);
	if (count === 0 || !children)
		return <ErrorMessage type="atLeast" component={componentToValidate.name} />;

	const elements = React.Children.map(children, (element) =>
		(element as React.ReactElement).type === componentToValidate ? (
			React.cloneElement(element as React.ReactElement, otherProps)
		) : (
			<ErrorMessage type="onlySupports" component={componentToValidate.name} />
		),
	);

	return <>{elements}</>;
};

export { Validate };
