import { FC } from 'react';
import { DataType } from '../../../types/dataType';

import './Tasks.scss';

interface Props {
    data: DataType[],
    prepareDateValue: Function
}

export const Tasks:FC<Props> = ({ data, prepareDateValue }) => {
    return (
        <div className="viewerUnit__tasks">
            {data.map((item) => {
                const {
                    id, name, status, date, shortDesc,
                } = item;
                const fullDate = new Date(date);
                const hours = `${prepareDateValue(fullDate.getHours())}${fullDate.getHours()}`;
                const minutes = `${prepareDateValue(fullDate.getMinutes())}${fullDate.getMinutes()}`;
                const dateNum = `${prepareDateValue(fullDate.getDate())}${fullDate.getDate()}`;
                const month = `${prepareDateValue(fullDate.getMonth())}${fullDate.getMonth()}`;
                const convertedDate = `${dateNum}.${month}.${fullDate.getFullYear()} ${hours}:${minutes}`;
                return (
                    <div
                        className="viewerUnit__task"
                        key={`task-${id}`}
                    >
                        <h3 className="viewerUnit__task__name">{name}</h3>
                        <p className="viewerUnit__task__description">{shortDesc}</p>
                        <p className="viewerUnit__task__status">
                            Статус задачи:
                            {' '}
                            {status ? 'close' : 'open'}
                        </p>
                        <p className="viewerUnit__task__date">{convertedDate}</p>
                    </div>
                );
            })}
        </div>
    );
};
