import { DataType } from '../../types/dataType';
import { FilterByDateFlagAction, FilterByDateFlagTypes } from '../../types/filterByDateFlagTypes';

export const filterByDateFlagOn = (data: DataType[]):FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_ON,
    data,
});

export const filterByDateFlagOff = ():FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_BY_DATE_FLAG_OFF,
});

export const writeDownFromTo = (from: number, to: number):FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.WRITE_DOWN_FROM_TO,
    from,
    to,
});

export const filterByStatusOff = ():FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_BY_STATUS_OFF,
});

export const filterByStatusOn = ():FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_BY_STATUS_ON,
});
