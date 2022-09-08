import React, { Children, JSXElementConstructor, PropsWithChildren, ReactElement } from 'react';
import { ErrorMessage } from '../error-message';

interface ValidateProps {
	componentToValidate: JSXElementConstructor<any>;
}

const Validate = ({ children, componentToValidate }: PropsWithChildren<ValidateProps>) => {
	const count = Children.count(children);
	if (count === 0) return <ErrorMessage type="atLeast" component={componentToValidate.name} />;
	if (count === 1 && (children as ReactElement).type !== componentToValidate)
		return <ErrorMessage type="onlySupports" component={componentToValidate.name} />;

	const elements = Children.map(children, (element) =>
		(element as ReactElement).type === componentToValidate ? element : null,
	);

	return <>{elements}</>;
};

export { Validate };
