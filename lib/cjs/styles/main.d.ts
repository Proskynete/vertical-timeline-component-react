import { DateFormat } from '../interfaces';
export declare const TimelineWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineWrapperInner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ContainerWrapper: import("styled-components").StyledComponent<"section", any, {}, never>;
interface YearContentProps {
    readonly format: DateFormat;
}
export declare const YearWrapper: import("styled-components").StyledComponent<"div", any, YearContentProps, never>;
export declare const YearSpan: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const BodyWrapper: import("styled-components").StyledComponent<"article", any, {}, never>;
interface TitleProps {
    readonly collapse?: boolean;
}
export declare const Title: import("styled-components").StyledComponent<"h2", any, TitleProps, never>;
export declare const Subtitle: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const BodyInner: import("styled-components").StyledComponent<"div", any, {}, never>;
interface IconProps {
    readonly isShowing?: boolean;
}
export declare const Icon: import("styled-components").StyledComponent<"i", any, IconProps, never>;
interface EventTitleProps {
    readonly collapse?: boolean;
}
export declare const EventTitle: import("styled-components").StyledComponent<"h3", any, EventTitleProps, never>;
export declare const DescriptionWrapper: import("styled-components").StyledComponent<"ul", any, {}, never>;
interface DescriptionProps {
    readonly symbol: string;
}
export declare const Description: import("styled-components").StyledComponent<"li", any, DescriptionProps, never>;
export declare const TextErrorMessage: import("styled-components").StyledComponent<"p", any, {}, never>;
export {};
