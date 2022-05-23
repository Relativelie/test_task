import { DataType } from './dataType';

export interface FilterByDateFlagState {
    isFilteredByFlag: boolean,
    filteredList: DataType[]
}

export enum FilterByDateFlagTypes {
    FILTER_DATE_BY_FLAG_ON = 'FILTER_DATE_BY_FLAG_ON',
    FILTER_DATE_BY_FLAG_OFF = 'FILTER_DATE_BY_FLAG_OFF',
}

interface FilterByDateFlagOn {
    type: FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_ON,
    data: DataType[]
}

interface FilterByDateFlagOff {
    type: FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_OFF,
}

export type FilterByDateFlagAction =
FilterByDateFlagOn
    | FilterByDateFlagOff;
