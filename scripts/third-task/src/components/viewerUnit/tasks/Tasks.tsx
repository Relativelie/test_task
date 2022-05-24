import { FC } from 'react';
import { DataType } from '../../../types/dataType';

interface Props {
    data: DataType[],
    prepareDateValue: Function
}

export const Tasks:FC<Props> = ({ data, prepareDateValue }) => {
    return (
        <div>
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
                    <div key={`task-${id}`}>
                        <p>{name}</p>
                        <p>{shortDesc}</p>
                        <p>
                            Статус задачи:
                            {' '}
                            {status ? 'close' : 'open'}
                        </p>
                        <p>{convertedDate}</p>
                    </div>
                );
            })}
        </div>
    );
};
