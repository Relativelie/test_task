import { FilterByStatusAction, FilterByStatusState, FilterByStatusTypes } from "../../types/filterByStatusTypes";


const initialState: FilterByStatusState = {
    isFiltered: false,
    filteredContent: []
};

export const FilterByStatusReducer = (
    state = initialState,
    action: FilterByStatusAction,
): FilterByStatusState => {
    switch (action.type) {
        case FilterByStatusTypes.TURN_OFF_FILTER: {
            return {
                ...state,
                isFiltered: false,
                filteredContent: []
            };
        }

        case FilterByStatusTypes.TURN_ON_FILTER: {
            const allItems = action.data;
            
            return {
                ...state,
                isFiltered: true,
                filteredContent: action.data
            };
        }

        default:
            return state;
    }
};
