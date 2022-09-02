import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Description, DescriptionWrapper, EventTitle, Icon } from '../../styles/main';
var Content = function (_a) {
    var _b;
    var title = _a.title, description = _a.description, collapse = _a.collapse;
    var config = useConfig().config;
    var _c = useState(true), show = _c[0], setShow = _c[1];
    var isCollapsed = collapse || config.collapse;
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(EventTitle, { collapse: isCollapsed, onClick: function () {
                if (isCollapsed)
                    handleSetShow();
            }, style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.event },
            isCollapsed && React.createElement(Icon, { isShowing: show }, "\u203A"),
            title),
        show && (React.createElement(DescriptionWrapper, null, description.map(function (text, i) {
            var _a;
            return (React.createElement(Description, { key: i, style: (_a = config.customStyles) === null || _a === void 0 ? void 0 : _a.description }, text));
        })))));
};
export { Content };
