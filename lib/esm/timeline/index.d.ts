declare const Timeline: {
    (props: any): JSX.Element;
    defaultProps: {
        theme: {
            yearColor: any;
            lineColor: any;
            dotColor: any;
            borderDotColor: any;
            titleColor: any;
            subtitleColor: any;
            textColor: any;
        };
        lang: any;
        dateFormat: any;
    };
    propTypes: {
        theme: import("prop-types").Requireable<import("prop-types").InferProps<{}>>;
        lang: import("prop-types").Requireable<string>;
        dateFormat: import("prop-types").Requireable<string>;
        children: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
    };
};
export default Timeline;
