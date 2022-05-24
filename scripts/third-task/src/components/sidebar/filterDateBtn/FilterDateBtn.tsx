import { FC } from 'react';

import './FilterDateBtn.scss';

interface Props {
    filterName: string[],
    getFilterFlag: Function
}

export const FilterDateBtn: FC<Props> = ({ filterName, getFilterFlag }) => {
    return (
        <div>
            <button
                className="sidebar__filterBtn"
                onClick={(e) => getFilterFlag(e)}
                data-filterflag={filterName[0]}
                type="button"
            >
                {filterName[1]}
            </button>
        </div>

    );
};
