import { DataType } from "./dataType";

export interface SearchState {
    isSearched: boolean,
    searchedList: DataType[]
}

export enum SearchActionTypes {
    TURN_ON_SEARCH = 'TURN_ON_SEARCH',
    TURN_OFF_SEARCH = 'TURN_OFF_SEARCH',
}

interface TurnOnSearch {
    type: SearchActionTypes.TURN_ON_SEARCH,
    data: DataType[]
}

interface TurnOffSearch {
    type: SearchActionTypes.TURN_OFF_SEARCH,
}

export type SearchAction =
    TurnOnSearch
    | TurnOffSearch;
