import { PropsWithChildren } from 'react';
interface YearContentProps {
    startDate: string;
    endDate?: string;
    currentYear?: boolean;
}
declare const YearContent: ({ startDate, endDate, currentYear, }: PropsWithChildren<YearContentProps>) => JSX.Element;
export default YearContent;
