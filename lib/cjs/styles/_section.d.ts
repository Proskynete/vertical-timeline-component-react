import { ThemeInterface } from '../types';
interface BodyWrapperProps {
    theme: ThemeInterface;
}
interface TitleProps {
    theme: ThemeInterface;
}
export declare const BodyWrapper: import("styled-components").StyledComponent<"article", any, BodyWrapperProps, never>;
export declare const Title: import("styled-components").StyledComponent<"p", any, TitleProps, never>;
export declare const BodyInner: import("styled-components").StyledComponent<"ul", any, {}, never>;
export {};
