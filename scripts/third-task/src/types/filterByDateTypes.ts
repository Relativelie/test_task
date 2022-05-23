export interface FilterByDateState {
    filteredList: any,
    isFiltered: boolean,
}

export enum FilterByDateActionTypes {
    TURN_OFF_FILTER_BY_DATE = 'TURN_OFF_FILTER_BY_DATE',
    TURN_ON_FILTER_BY_DATE = 'TURN_ON_FILTER_BY_DATE',
}

interface TurnOffFilterByDate {
    type: FilterByDateActionTypes.TURN_OFF_FILTER_BY_DATE,
}

interface TurnOnFilterByDate {
    type: FilterByDateActionTypes.TURN_ON_FILTER_BY_DATE,
    data: any
}

export type FilterByDateAction =
    TurnOffFilterByDate
    | TurnOnFilterByDate;
