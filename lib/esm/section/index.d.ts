declare const Section: {
    (props: any): JSX.Element;
    propTypes: {
        title: import("prop-types").Validator<string>;
        children: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
    };
};
export default Section;
