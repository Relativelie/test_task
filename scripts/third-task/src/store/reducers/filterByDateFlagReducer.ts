import { FilterByDateFlagAction, FilterByDateFlagState, FilterByDateFlagTypes } from '../../types/filterByDateFlagTypes';

const initialState: FilterByDateFlagState = {
    isFilteredByFlag: false,
    filteredList: [],
};

export const filterByDateFlagReducer = (
    state = initialState,
    action: FilterByDateFlagAction,
): FilterByDateFlagState => {
    switch (action.type) {
        case FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_OFF: {
            return {
                ...state,
                isFilteredByFlag: false,
                filteredList: [],
            };
        }
        case FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_ON: {
            return {
                ...state,
                isFilteredByFlag: true,
                filteredList: action.data,
            };
        }

        default:
            return state;
    }
};
