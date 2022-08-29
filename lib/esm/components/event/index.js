import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContentWrapper, Description, DescriptionWrapper, EventTitle, Icon, } from '../../styles/main';
var Event = function (_a) {
    var _b;
    var title = _a.title, description = _a.description, collapse = _a.collapse;
    var config = useConfig().config;
    var _c = useState(true), show = _c[0], setShow = _c[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(ContentWrapper, null,
        React.createElement(EventTitle, { collapse: collapse || config.collapse, onClick: function () {
                if (collapse || config.collapse)
                    handleSetShow();
            }, style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.event },
            (collapse || config.collapse) && React.createElement(Icon, { isShowing: show }, "\u203A"),
            title),
        show && (React.createElement(DescriptionWrapper, null, description.map(function (text, i) {
            var _a;
            return (React.createElement(Description, { key: i, style: (_a = config.customStyles) === null || _a === void 0 ? void 0 : _a.description }, text));
        })))));
};
export { Event };
