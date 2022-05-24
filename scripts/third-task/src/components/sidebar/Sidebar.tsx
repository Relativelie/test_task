import { MouseEvent, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FilterByStatus } from './filterByStatus/FilterByStatus';
import { FilterCalendarBtn } from './filterCalendarBtn/FilterCalendarBtn';
import { FilterDateBtn } from './filterDateBtn/FilterDateBtn';

import './Sidebar.scss';

export const Sidebar = () => {
    const {
        sendGet,
        writeDownFromTo,
        filterByDateFlagOn,
        filterByStatusOff,
        filterByStatusOn,
    } = useActions();

    const { from, to, isFilterByStatus } = useTypedSelector(
        (filterState) => filterState.filterByDateFlagReducer,
    );
    const { getResult } = useTypedSelector(
        (requestState) => requestState.sendRequestReducer,
    );

    const convertToTimestamp = (date: Date) => {
        const midnight = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        return Date.parse(midnight);
    };

    useEffect(() => {
        const getTasksByDate = async () => {
            let filterByStatus: string;
            if (isFilterByStatus) filterByStatus = '&status=false';
            else filterByStatus = '';
            const url = `https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos/date?from=${from}&to=${to}${filterByStatus}&limit=10&offset=0`;
            const headers = { accept: 'application/json' };
            await sendGet(url, headers);
        };

        if (from !== undefined && to !== undefined) {
            getTasksByDate();
        } else {
            writeDownFromTo(1502384101000, convertToTimestamp(new Date()));
            if (from !== undefined && to !== undefined) getTasksByDate();
        }
    }, [from, to, isFilterByStatus]);

    useEffect(() => {
        if (from !== undefined && to !== undefined) filterByDateFlagOn(getResult);
    }, [getResult]);

    const calcWeekDays = () => {
        const curr = new Date();
        const first = curr.getDate() - curr.getDay();
        const last = first + 6;
        const firstDay = new Date(curr.setDate(first));
        const lastDay = new Date(curr.setDate(last));
        return [firstDay, lastDay];
    };

    const getDateValue = (dateValue: Date) => {
        const fromDate = convertToTimestamp(dateValue);
        const toValue = `${dateValue.getFullYear()}.${dateValue.getMonth() + 1}.${dateValue.getDate() + 1}`;
        const toDate = Date.parse(toValue);
        writeDownFromTo(fromDate, toDate);
    };

    const getFilterFlag = (event: MouseEvent<HTMLElement>) => {
        const elem = event.target as HTMLElement;
        const flag = elem.dataset.filterflag;
        if (flag === 'today') {
            getDateValue(new Date());
        } else if (flag === 'week') {
            const firstLastWeekDay = calcWeekDays();
            const fromDate = convertToTimestamp(firstLastWeekDay[0]);
            const toDate = convertToTimestamp(firstLastWeekDay[1]);
            writeDownFromTo(fromDate, toDate);
        }
    };

    const filterByStatus = () => {
        if (isFilterByStatus) filterByStatusOff();
        else filterByStatusOn();
    };

    const allFilters = [
        ['today', 'Сегодня'],
        ['week', 'На неделю'],
    ];

    return (
        <div className="sidebar">
            <FilterDateBtn filterName={allFilters[0]} getFilterFlag={getFilterFlag} />
            <FilterDateBtn filterName={allFilters[1]} getFilterFlag={getFilterFlag} />
            <FilterCalendarBtn getCalendarValue={getDateValue} />
            <FilterByStatus
                isFilterByStatus={isFilterByStatus}
                filterByStatus={filterByStatus}
            />
        </div>
    );
};
