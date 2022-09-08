interface ErrorMessageProps {
    type: 'atLeast' | 'onlySupports';
    component: string;
}
declare const ErrorMessage: ({ type, component }: ErrorMessageProps) => JSX.Element;
export { ErrorMessage };
