import React, { PropsWithChildren } from 'react';
declare type ValidateProps = {
    componentToValidate: React.JSXElementConstructor<any>;
} & {
    [key: string]: any;
};
declare const Validate: ({ children, componentToValidate, ...otherProps }: PropsWithChildren<ValidateProps>) => JSX.Element;
export { Validate };
