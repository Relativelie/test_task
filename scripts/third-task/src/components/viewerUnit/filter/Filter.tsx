import { FC } from 'react';

interface Props {
    changeFilterState: Function;
}

export const Filter: FC<Props> = ({ changeFilterState }) => {
    return (
        <div>
            <button
                onClick={() => changeFilterState()}
                type="button"
            >
                Сортировать по дате
            </button>
        </div>
    );
};
