declare const Container: {
    (props: any): JSX.Element;
    propTypes: {
        children: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
    };
};
export default Container;
