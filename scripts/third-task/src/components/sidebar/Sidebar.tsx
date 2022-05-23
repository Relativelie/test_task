import { MouseEvent, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { FilterBtn } from './filterBtn/FilterBtn';

export const Sidebar = () => {
    const { sendGet } = useActions();
    const allFilters = [
        ['today', 'Сегодня'],
        ['week', 'На неделю'],
    ];

    const getTasksByDate = async () => {
        // const url = `https://todo.doczilla.pro/api/todos/date?from=${}&to=${}&status=${}&limit=100&offset=0`;
        const headers = { accept: 'application/json' };
        await sendGet(url, headers);
    };

    const getFilterFlag = (event: MouseEvent<HTMLElement>) => {
        const elem = event.target as HTMLElement;
        console.log(elem.dataset.filterflag);
    };

    const parse

    return (
        <div>
            <FilterBtn filterName={allFilters[0]} getFilterFlag={getFilterFlag} />
            <FilterBtn filterName={allFilters[1]} getFilterFlag={getFilterFlag} />
        </div>
    );
};
