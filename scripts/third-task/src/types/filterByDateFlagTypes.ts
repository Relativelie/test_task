import { DataType } from './dataType';

export interface FilterByDateFlagState {
    isFilteredByFlag: boolean,
    filteredList: DataType[],
    from: number | undefined,
    to: number | undefined,
    isFilterByStatus: boolean
}

export enum FilterByDateFlagTypes {
    FILTER_BY_DATE_FLAG_ON = 'FILTER_BY_DATE_FLAG_ON',
    FILTER_BY_DATE_FLAG_OFF = 'FILTER_BY_DATE_FLAG_OFF',
    WRITE_DOWN_FROM_TO = 'WRITE_DOWN_FROM_TO',
}

interface FilterByDateFlagOn {
    type: FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_ON,
    data: DataType[]
}

interface FilterByDateFlagOff {
    type: FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_OFF,
}

interface WriteDownFromTo {
    type: FilterByDateFlagTypes.WRITE_DOWN_FROM_TO,
    from: number,
    to: number,
}

export type FilterByDateFlagAction =
    FilterByDateFlagOn
    | FilterByDateFlagOff
    | WriteDownFromTo;
