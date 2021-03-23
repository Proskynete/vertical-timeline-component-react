import React from 'react';
import { Subtitle, DescriptionText } from '../../styles/main';
var Description = function (_a) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'description' : _b;
    return variant === 'subtitle' ? (React.createElement(Subtitle, null, text)) : (React.createElement(DescriptionText, null, text));
};
export default Description;
