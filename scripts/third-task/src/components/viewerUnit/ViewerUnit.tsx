import { FC, useEffect, useState } from 'react';
import { DataType } from '../../types/dataType';
import { Filter } from './filter/Filter';
import { Tasks } from './tasks/Tasks';

import './ViewerUnit.scss';

interface Props {
    data: DataType[]
}

export const ViewerUnit: FC<Props> = ({ data }) => {
    const [filterByDate, setFilterByDate] = useState('not selected');
    const [tasks, setTasks] = useState<DataType[] | []>([]);
    const prepareDateValue = (value: number) => {
        if (value.toString().length === 2) return '';
        return '0';
    };

    useEffect(() => {
        setTasks(data);
    }, [data]);

    useEffect(() => {
        if (filterByDate === 'not selected') {
            setTasks(data);
        } else if (filterByDate === 'ascending') {
            const filteredData = [...data].sort((a, b) => {
                return (Date.parse(a.date) > Date.parse(b.date) ? 1 : -1);
            });
            setTasks(filteredData);
        } else {
            const filteredData = [...data].sort((a, b) => {
                return (Date.parse(a.date) > Date.parse(b.date) ? 1 : -1);
            });
            setTasks(filteredData.reverse());
        }
    }, [filterByDate]);

    const changeFilterState = () => {
        const filterValues = ['not selected', 'ascending', 'descending'];
        if (filterByDate === filterValues[0]) setFilterByDate(filterValues[1]);
        else if (filterByDate === filterValues[1]) setFilterByDate(filterValues[2]);
        else setFilterByDate(filterValues[0]);
    };

    return (
        <div className="viewerUnit">
            <Filter changeFilterState={changeFilterState} />
            <Tasks data={tasks} prepareDateValue={prepareDateValue} />
        </div>
    );
};
