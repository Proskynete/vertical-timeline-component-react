import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Subtitle, DescriptionText, ContentWrapper } from '../../styles/main';
var Content = function (_a) {
    var title = _a.title, description = _a.description, collapse = _a.collapse;
    var config = useConfig().config;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(ContentWrapper, null,
        React.createElement(Subtitle, { collapse: collapse || config.collapse, onClick: function () {
                if (collapse || config.collapse)
                    handleSetShow();
            } },
            (collapse || config.collapse) && (React.createElement("i", { style: {
                    marginRight: '3px',
                    fontStyle: 'normal',
                    transform: show ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform .2s ease-in-out',
                } }, "\u203A")),
            title),
        show && (React.createElement("div", { style: { paddingLeft: '10px' } }, description.map(function (text, index) { return (React.createElement(DescriptionText, { key: index }, text)); })))));
};
export { Content };
