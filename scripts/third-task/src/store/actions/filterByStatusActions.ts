import { DataType } from "../../types/dataType";
import { FilterByStatusAction, FilterByStatusTypes } from "../../types/filterByStatusTypes";

export const turnOnFilter = (data: DataType[]):FilterByStatusAction => ({
    type: FilterByStatusTypes.TURN_ON_FILTER,
    data,
});

export const turnOffFilter = ():FilterByStatusAction => ({
    type: FilterByStatusTypes.TURN_OFF_FILTER,
});