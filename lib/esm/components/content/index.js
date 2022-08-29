import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContentWrapper, Description, DescriptionWrapper, EventTitle, Icon, } from '../../styles/main';
var Content = function (_a) {
    var title = _a.title, description = _a.description, collapse = _a.collapse;
    var config = useConfig().config;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(ContentWrapper, null,
        React.createElement(EventTitle, { collapse: collapse || config.collapse, onClick: function () {
                if (collapse || config.collapse)
                    handleSetShow();
            } },
            (collapse || config.collapse) && React.createElement(Icon, { isShowing: show }, "\u203A"),
            title),
        show && (React.createElement(DescriptionWrapper, null, description.map(function (text, index) { return (React.createElement(Description, { key: index }, text)); })))));
};
export { Content };
