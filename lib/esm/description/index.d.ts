declare const Description: {
    (props: any): JSX.Element;
    defaultProps: {
        variant: string;
    };
    propTypes: {
        text: import("prop-types").Validator<string>;
        variant: import("prop-types").Requireable<string>;
    };
};
export default Description;
