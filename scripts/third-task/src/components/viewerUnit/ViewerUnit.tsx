import {
    FC, MouseEvent, useEffect, useState,
} from 'react';
import { DataType } from '../../types/dataType';
import { Filter } from './filter/Filter';
import { OpenedTaskCard } from './openedTaskCard/OpenedTaskCard';
import { Tasks } from './tasks/Tasks';

import './ViewerUnit.scss';

interface Props {
    data: DataType[];
}

export const ViewerUnit: FC<Props> = ({ data }) => {
    const [filterByDate, setFilterByDate] = useState('not selected');
    const [tasks, setTasks] = useState<DataType[] | []>([]);
    const [isCardOpened, setIsCardOpened] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<DataType>();

    useEffect(() => {
        setTasks(data);
    }, [data]);

    useEffect(() => {
        if (filterByDate === 'not selected') {
            setTasks(data);
        } else if (filterByDate === 'ascending') {
            const filteredData = [...data].sort((a, b) => {
                return Date.parse(a.date) > Date.parse(b.date) ? 1 : -1;
            });
            setTasks(filteredData);
        } else {
            const filteredData = [...data].sort((a, b) => {
                return Date.parse(a.date) > Date.parse(b.date) ? 1 : -1;
            });
            setTasks(filteredData.reverse());
        }
    }, [filterByDate]);

    useEffect(() => {
        if (document.querySelector('.openedTask') !== null) {
            if (isCardOpened) {
                document.querySelector<HTMLElement>('.openedTask')!.style.display = 'flex';
            } else {
                document.querySelector<HTMLElement>('.openedTask')!.style.display = 'none';
            }
        }
    }, [isCardOpened]);

    const changeFilterState = () => {
        const filterValues = ['not selected', 'ascending', 'descending'];
        if (filterByDate === filterValues[0]) setFilterByDate(filterValues[1]);
        else if (filterByDate === filterValues[1]) setFilterByDate(filterValues[2]);
        else setFilterByDate(filterValues[0]);
    };

    const openTaskCard = (e: MouseEvent<HTMLElement>) => {
        const elem = e.target as HTMLElement;
        const selectedTaskId = elem.dataset.task;
        const selectedTask = tasks.filter((item) => item.id === selectedTaskId)[0];
        setIsCardOpened(true);
        setSelectedCard(selectedTask);
    };

    const prepareDateValue = (value: number) => {
        if (value.toString().length === 2) return '';
        return '0';
    };

    const convertDate = (date: Date) => {
        const fullDate = new Date(date);
        const hours = `${prepareDateValue(
            fullDate.getHours(),
        )}${fullDate.getHours()}`;
        const minutes = `${prepareDateValue(
            fullDate.getMinutes(),
        )}${fullDate.getMinutes()}`;
        const dateNum = `${prepareDateValue(
            fullDate.getDate(),
        )}${fullDate.getDate()}`;
        const month = `${prepareDateValue(
            fullDate.getMonth(),
        )}${fullDate.getMonth()}`;
        return `${dateNum}.${month}.${fullDate.getFullYear()} ${hours}:${minutes}`;
    };

    const closeTaskCard = () => {
        setIsCardOpened(false);
        setSelectedCard(undefined);
    };

    return (
        <div className="viewerUnit">
            <Filter changeFilterState={changeFilterState} />
            <Tasks
                data={tasks}
                openTaskCard={openTaskCard}
                convertDate={convertDate}
            />
            {isCardOpened && selectedCard !== undefined && (
                <OpenedTaskCard
                    selectedCard={selectedCard}
                    convertDate={convertDate}
                    closeTaskCard={closeTaskCard}
                />
            )}
        </div>
    );
};
