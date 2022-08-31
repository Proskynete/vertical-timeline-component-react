import { PropsWithChildren } from 'react';
interface YearContentProps {
    startDate: string;
    endDate?: string;
    today?: boolean;
}
declare const YearContent: ({ startDate, endDate, today, }: PropsWithChildren<YearContentProps>) => JSX.Element;
export default YearContent;
