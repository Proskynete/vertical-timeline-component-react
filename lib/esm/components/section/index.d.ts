import { PropsWithChildren } from 'react';
interface SectionProps {
    title: string;
}
declare const Section: ({ title, children }: PropsWithChildren<SectionProps>) => JSX.Element;
export default Section;
