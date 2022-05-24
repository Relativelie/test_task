import { FC } from 'react';

import './filterByStatus.scss';

interface Props {
    isFilterByStatus: boolean;
    filterByStatus: Function;
}

export const FilterByStatus: FC<Props> = ({
    isFilterByStatus,
    filterByStatus,
}) => {
    return (
        <div>
            <label htmlFor="statusCheckbox" className="sidebar__statusCheckbox">
                <input
                    id="statusCheckbox"
                    type="checkbox"
                    defaultChecked={isFilterByStatus}
                    onChange={() => filterByStatus()}
                />
                Только невыполненные
            </label>
        </div>
    );
};
