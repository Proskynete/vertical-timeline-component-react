import React, { createContext } from 'react';
import { defaultValues } from '../config';
var ConfigContext = createContext({
    config: defaultValues,
});
export var ConfigProvider = function (_a) {
    var children = _a.children, config = _a.config;
    return React.createElement(ConfigContext.Provider, { value: { config: config } }, children);
};
export var ConfigCustomer = ConfigContext.Consumer;
export { ConfigContext };
