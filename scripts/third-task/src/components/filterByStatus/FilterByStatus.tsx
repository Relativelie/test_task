import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { DataType } from "../../types/dataType";

interface Props {
    data: DataType[]
}

export const FilterByStatus: FC<Props> = ({ data }) => {
    const { isFiltered } = useTypedSelector(
        (filterState) => filterState.FilterByStatusReducer,
    );
    const { turnOffFilter, turnOnFilter } = useActions();
    const changeValue = () => {
        if (isFiltered) turnOffFilter();
        else turnOnFilter(data)
    }

    return (
        <div>
            <label>
                <input type="checkbox"
                    defaultChecked={isFiltered}
                    onChange={() => changeValue()}
                />
                Только невыполненные
            </label>
        </div>
    );
};
