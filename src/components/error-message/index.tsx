import React from 'react';
import { TextErrorMessage } from '../../styles/main';

interface ErrorMessageProps {
	type: 'atLeast' | 'onlySupports';
	component: string;
}

const ErrorMessage = ({ type, component }: ErrorMessageProps) => {
	return (
		<>
			{type === 'atLeast' ? (
				<TextErrorMessage>
					You need at least one <code>{`<${component} />`}</code> to correctly render this component
				</TextErrorMessage>
			) : (
				<TextErrorMessage>
					This component only supports <code>{`<${component} />`}</code> components as children
				</TextErrorMessage>
			)}
		</>
	);
};

export { ErrorMessage };
