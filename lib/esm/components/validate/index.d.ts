import { JSXElementConstructor, PropsWithChildren } from 'react';
interface ValidateProps {
    componentToValidate: JSXElementConstructor<any>;
}
declare const Validate: ({ children, componentToValidate }: PropsWithChildren<ValidateProps>) => JSX.Element;
export { Validate };
