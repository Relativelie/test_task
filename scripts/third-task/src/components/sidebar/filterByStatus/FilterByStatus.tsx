import { FC } from 'react';

interface Props {
    isFilterByStatus: boolean,
    filterByStatus: Function
}

export const FilterByStatus: FC<Props> = ({ isFilterByStatus, filterByStatus }) => {
    return (
        <div>
            <label htmlFor="statusCheckbox">
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
