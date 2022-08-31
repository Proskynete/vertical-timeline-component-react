interface ContentProps {
    title: string;
    description: string[];
    collapse?: boolean;
}
declare const Content: ({ title, description, collapse }: ContentProps) => JSX.Element;
export { Content };
