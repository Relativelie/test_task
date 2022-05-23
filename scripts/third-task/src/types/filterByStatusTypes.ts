import { DataType } from "./dataType"

export interface FilterByStatusState {
    isFiltered: boolean,
    filteredContent: DataType[]
}

export enum FilterByStatusTypes {
    TURN_ON_FILTER = "TURN_ON_FILTER",
    TURN_OFF_FILTER = "TURN_OFF_FILTER"
}

interface TurnOnFilter {
    type: FilterByStatusTypes.TURN_ON_FILTER,
    data: DataType[]
}

interface TurnOffFilter {
    type: FilterByStatusTypes.TURN_OFF_FILTER,
}

export type FilterByStatusAction =
    TurnOnFilter
    | TurnOffFilter