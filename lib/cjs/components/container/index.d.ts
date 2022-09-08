import { PropsWithChildren } from 'react';
interface ContainerProps {
    title: string;
    startDate: string | Date;
    endDate?: string | Date;
    today?: boolean;
    withoutDay?: boolean;
}
declare const Container: ({ title, startDate, endDate, today, withoutDay, children, }: PropsWithChildren<ContainerProps>) => JSX.Element;
export { Container };
