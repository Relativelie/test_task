import { DataType } from '../../types/dataType';
import { FilterByDateFlagAction, FilterByDateFlagTypes } from '../../types/filterByDateFlagTypes';

export const filterDateByFlagOn = (data: DataType[]):FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_ON,
    data,
});

export const filterDateByFlagOff = ():FilterByDateFlagAction => ({
    type: FilterByDateFlagTypes.FILTER_DATE_BY_FLAG_OFF,
});
