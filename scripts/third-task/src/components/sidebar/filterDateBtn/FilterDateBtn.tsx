import { FC } from 'react';

interface Props {
    filterName: string[],
    getFilterFlag: Function
}

export const FilterDateBtn: FC<Props> = ({ filterName, getFilterFlag }) => {
    return (
        <div>
            <button
                onClick={(e) => getFilterFlag(e)}
                data-filterflag={filterName[0]}
                type="button"
            >
                {filterName[1]}
            </button>
        </div>

    );
};
