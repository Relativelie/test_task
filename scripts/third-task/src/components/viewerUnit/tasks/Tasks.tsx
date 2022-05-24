import { FC } from 'react';
import { DataType } from '../../../types/dataType';

import './Tasks.scss';

interface Props {
    data: DataType[],
    openTaskCard: Function,
    convertDate: Function
}

export const Tasks: FC<Props> = ({ data, openTaskCard, convertDate }) => {
    return (
        <div className="viewerUnit__tasks">
            {data.map((item) => {
                const {
                    id, name, status, date, shortDesc,
                } = item;
                const statusClassName = `viewerUnit__task__status ${status ? 'viewerUnit__task__status_close' : ''}`.trim();
                return (
                    <div
                        className="viewerUnit__task"
                        key={`task-${id}`}
                    >
                        <h3 className="viewerUnit__task__name">{name}</h3>
                        <button
                            className="viewerUnit__task__openBtn"
                            type="button"
                            onClick={(e) => openTaskCard(e)}
                            data-task={id}
                        >
                            Открыть задачу
                        </button>
                        <p className="viewerUnit__task__description">{shortDesc}</p>
                        <div className={statusClassName} />
                        <p className="viewerUnit__task__date">{convertDate(date)}</p>
                    </div>
                );
            })}
        </div>
    );
};
