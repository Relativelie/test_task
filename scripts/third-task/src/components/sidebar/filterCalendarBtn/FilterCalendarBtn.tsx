import { FC } from 'react';
import Calendar from 'react-calendar';

interface Props {
    getCalendarValue: Function
}

export const FilterCalendarBtn:FC<Props> = ({ getCalendarValue }) => {
    return (
        <div>
            <Calendar
                onChange={(e: Date) => getCalendarValue(e)}
            />
        </div>
    );
};
