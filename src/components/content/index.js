import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerComponent = styled.div`
  display: flex;
  line-height: 1;

  &:last-child {
    .body-component {
        &::before {
          display: none;
        }
      }
    }
  }
`;

const Content = (props) => {
	const { children } = props;

	return (
		<ContainerComponent className='content-component'>
			{children}
		</ContainerComponent>
	);
};

Content.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Content;
