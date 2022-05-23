import { SearchAction, SearchActionTypes, SearchState } from '../../types/searchTypes';

const initialState: SearchState = {
    searchedList: [],
    isSearched: false,
};

export const searchReducer = (
    state = initialState,
    action: SearchAction,
):SearchState => {
    switch (action.type) {
        case SearchActionTypes.TURN_OFF_SEARCH: {
            return {
                ...state,
                searchedList: [],
                isSearched: false,
            };
        }
        case SearchActionTypes.TURN_ON_SEARCH: {
            return {
                ...state,
                searchedList: action.data,
                isSearched: true,
            };
        }
        default:
            return state;
    }
};
