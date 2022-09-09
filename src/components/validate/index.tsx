import React, { Children, JSXElementConstructor, PropsWithChildren, ReactElement } from 'react';
import { ErrorMessage } from '../error-message';

interface ValidateProps {
	componentToValidate: JSXElementConstructor<any>;
}

const Validate = ({ children, componentToValidate }: PropsWithChildren<ValidateProps>) => {
	const count = children && Children.count(children);
	if (count === 0 || !children)
		return <ErrorMessage type="atLeast" component={componentToValidate.name} />;

	const elements = Children.map(children, (element) =>
		(element as ReactElement).type === componentToValidate ? (
			element
		) : (
			<ErrorMessage type="onlySupports" component={componentToValidate.name} />
		),
	);

	return <>{elements}</>;
};

export { Validate };
