import { FC } from 'react';
import filterImg from './../../../assets/images/filter.png';
import './Filter.scss';

interface Props {
    changeFilterState: Function;
}

export const Filter: FC<Props> = ({ changeFilterState }) => {
    return (
        <div className="viewerUnit__filterBlock">
            <img
                className="viewerUnit__filterBlock__filterImage"
                src={filterImg}
                alt="filterLogo"
            />
            <button
                className="viewerUnit__filterBlock__filterBtn"
                onClick={() => changeFilterState()}
                type="button"
            >
                Сортировать по дате
            </button>
        </div>
    );
};
