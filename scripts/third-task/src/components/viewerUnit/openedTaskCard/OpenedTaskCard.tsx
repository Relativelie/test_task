import { FC } from 'react';
import { DataType } from '../../../types/dataType';
import './OpenedTaskCard.scss';

interface Props {
    selectedCard: DataType;
    convertDate: Function;
    closeTaskCard: Function;
}
export const OpenedTaskCard: FC<Props> = ({
    selectedCard,
    convertDate,
    closeTaskCard,
}) => {
    const statusClassName = `viewerUnit__task__status ${selectedCard.status ? 'viewerUnit__task__status_close' : ''}`.trim();
    return (
        <div className="openedTask">
            <div className="openedTask__background" />
            <div className="openedTask__modal">
                <div className="openedTask__header">
                    <h3 className="openedTask__name">{selectedCard.name}</h3>
                    <div className={statusClassName} />
                </div>
                <p className="openedTask__date">{convertDate(selectedCard.date)}</p>
                <hr className="openedTask__hr" />
                <div className="openedTask__descriptionBlock">
                    <p>{selectedCard.fullDesc}</p>
                    <button
                        className="openedTask__closeBtn"
                        onClick={() => closeTaskCard()}
                        type="button"
                    >
                        Готово
                    </button>
                </div>

            </div>
        </div>
    );
};
