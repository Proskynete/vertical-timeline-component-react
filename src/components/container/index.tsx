import React, { FC } from 'react';
import { ContainerWrapper, BodyContent } from '../../styles/main';

const Container: FC = ({ children }): JSX.Element => {
	return children ? (
		<ContainerWrapper>
			{children[0]}
			<BodyContent>{children[1]}</BodyContent>
		</ContainerWrapper>
	) : (
		<></>
	);
};

export default Container;
