import { FilterByDateFlagAction, FilterByDateFlagState, FilterByDateFlagTypes } from '../../types/filterByDateFlagTypes';

const initialState: FilterByDateFlagState = {
    isFilteredByFlag: false,
    filteredList: [],
    from: undefined,
    to: undefined,
    isFilterByStatus: false,
};

export const filterByDateFlagReducer = (
    state = initialState,
    action: FilterByDateFlagAction,
): FilterByDateFlagState => {
    switch (action.type) {
        case FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_OFF: {
            return {
                ...state,
                isFilteredByFlag: false,
                filteredList: [],
                from: undefined,
                to: undefined,
            };
        }
        case FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_ON: {
            console.log("action.data", action.data)
            return {
                ...state,
                isFilteredByFlag: true,
                filteredList: action.data,
            };
        }
        case FilterByDateFlagTypes.WRITE_DOWN_FROM_TO: {
            return {
                ...state,
                from: action.from,
                to: action.to,
            };
        }
        default:
            return state;
    }
};
