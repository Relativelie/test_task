export interface SearchState {
    isSearched: boolean,
    searchedList: any
}

export enum SearchActionTypes {
    TURN_ON_SEARCH = 'TURN_ON_SEARCH',
    TURN_OFF_SEARCH = 'TURN_OFF_SEARCH',
}

interface TurnOnSearch {
    type: SearchActionTypes.TURN_ON_SEARCH,
    data: any
}

interface TurnOffSearch {
    type: SearchActionTypes.TURN_OFF_SEARCH,
}

export type SearchAction =
    TurnOnSearch
    | TurnOffSearch;
