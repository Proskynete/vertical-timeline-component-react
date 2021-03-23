import React from 'react';
import { ContainerWrapper, BodyContent } from '../../styles/main';
import { ContainerInterface } from '../../types';

const Container = ({ children }: ContainerInterface) => (
	<ContainerWrapper>
		{children[0]}
		<BodyContent>{children[1]}</BodyContent>
	</ContainerWrapper>
);

export default Container;
