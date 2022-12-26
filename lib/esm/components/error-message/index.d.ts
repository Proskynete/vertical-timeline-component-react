interface ErrorMessageProps {
    component: string;
    type: 'atLeast' | 'onlySupports';
}
declare const ErrorMessage: ({ type, component }: ErrorMessageProps) => JSX.Element;
export { ErrorMessage };
