declare const YearContent: {
    (props: any): JSX.Element;
    defaultProps: {
        endDate: string;
        currentYear: boolean;
    };
    propTypes: {
        startDate: import("prop-types").Validator<string>;
        endDate: import("prop-types").Requireable<string>;
        currentYear: import("prop-types").Requireable<boolean>;
    };
};
export default YearContent;
