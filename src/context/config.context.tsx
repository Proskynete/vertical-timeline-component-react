import React, { createContext, PropsWithChildren } from 'react';
import { defaultValues } from '../config';
import { DefaultTimelineProps } from '../interfaces';

export interface ConfigProviderProps {
	config: DefaultTimelineProps;
}

const ConfigContext = createContext<ConfigProviderProps>({
	config: defaultValues,
});

export const ConfigProvider = ({ children, config }: PropsWithChildren<ConfigProviderProps>) => {
	return <ConfigContext.Provider value={{ config }}>{children}</ConfigContext.Provider>;
};

export const ConfigCustomer = ConfigContext.Consumer;
export { ConfigContext };
