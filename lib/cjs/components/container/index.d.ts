import { PropsWithChildren } from 'react';
interface ContainerProps {
    title: string;
    startDate: string;
    endDate?: string;
    today?: boolean;
}
declare const Container: ({ title, startDate, endDate, today, children, }: PropsWithChildren<ContainerProps>) => JSX.Element;
export { Container };
