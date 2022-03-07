import React from 'react';
import { string, oneOf } from 'prop-types';
import { Subtitle, DescriptionText, DescriptionSubtitle, } from '../../styles/main';
var Description = function (props) {
    var variant = props.variant, text = props.text;
    switch (variant) {
        case 'subtitle':
            return React.createElement(Subtitle, null, text);
        case 'descriptionSubtitle':
            return React.createElement(DescriptionSubtitle, null, text);
        default:
            return React.createElement(DescriptionText, null, text);
    }
};
Description.defaultProps = {
    variant: 'description',
};
Description.propTypes = {
    text: string.isRequired,
    variant: oneOf(['subtitle', 'description', 'descriptionSubtitle']),
};
export default Description;
