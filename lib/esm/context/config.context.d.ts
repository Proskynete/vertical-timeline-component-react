import React, { PropsWithChildren } from 'react';
import { DefaultTimelineProps } from '../interfaces';
export interface ConfigProviderProps {
    config: DefaultTimelineProps;
}
declare const ConfigContext: React.Context<ConfigProviderProps>;
export declare const ConfigProvider: ({ children, config }: PropsWithChildren<ConfigProviderProps>) => JSX.Element;
export declare const ConfigCustomer: React.Consumer<ConfigProviderProps>;
export { ConfigContext };
