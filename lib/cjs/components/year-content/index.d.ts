import { PropsWithChildren } from 'react';
interface YearContentProps {
    startDate: string | Date;
    endDate?: string | Date;
    today?: boolean;
    withoutDay?: boolean;
}
declare const YearContent: ({ startDate, endDate, today, withoutDay, }: PropsWithChildren<YearContentProps>) => JSX.Element;
export default YearContent;
