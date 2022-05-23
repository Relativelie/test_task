import { MouseEvent, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FilterBtn } from './filterBtn/FilterBtn';

export const Sidebar = () => {
    const {
        sendGet, writeDownFromTo, filterByDateFlagOn,
    } = useActions();
    const allFilters = [
        ['today', 'Сегодня'],
        ['week', 'На неделю'],
    ];

    const {
        from, to, isFilterByStatus,
    } = useTypedSelector(
        (filterState) => filterState.filterByDateFlagReducer,
    );
    const { getResult } = useTypedSelector(
        (requestState) => requestState.sendRequestReducer,
    );

    useEffect(() => {
        const getTasksByDate = async () => {
            const url = `https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos/date?from=${from}&to=${to}&status=${isFilterByStatus}&limit=100&offset=0`;
            const headers = { accept: 'application/json' };
            await sendGet(url, headers);
        };

        if (from !== undefined && to !== undefined) {
            getTasksByDate();
        }
    }, [from, to]);

    useEffect(() => {
        if (from !== undefined && to !== undefined) filterByDateFlagOn(getResult);
    }, [getResult]);

    const convertToTimestamp = (date: Date) => {
        const midnight = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
        return Date.parse(midnight);
    };

    const calcWeekDays = () => {
        const curr = new Date();
        const first = curr.getDate() - curr.getDay();
        const last = first + 6;
        const firstDay = new Date(curr.setDate(first));
        const lastDay = new Date(curr.setDate(last));
        return [firstDay, lastDay];
    };

    const getFilterFlag = (event: MouseEvent<HTMLElement>) => {
        const elem = event.target as HTMLElement;
        const flag = elem.dataset.filterflag;
        if (flag === 'today') {
            const fromTo = convertToTimestamp(new Date());
            writeDownFromTo(fromTo, fromTo);
        } else if (flag === 'week') {
            const firstLastWeekDay = calcWeekDays();
            const fromDate = convertToTimestamp(firstLastWeekDay[0]);
            const toDate = convertToTimestamp(firstLastWeekDay[1]);
            writeDownFromTo(fromDate, toDate);
        }
    };

    return (
        <div>
            <FilterBtn filterName={allFilters[0]} getFilterFlag={getFilterFlag} />
            <FilterBtn filterName={allFilters[1]} getFilterFlag={getFilterFlag} />
        </div>
    );
};
