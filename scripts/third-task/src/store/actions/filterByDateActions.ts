import { FilterByDateAction, FilterByDateActionTypes } from "../../types/filterByDateTypes";

export const TurnOnFilterByDate = (filterBy: string, data:any): FilterByDateAction => ({
    type: FilterByDateActionTypes.TURN_ON_FILTER_BY_DATE,
    data,
});

export const TurnOffFilterByDate = (): FilterByDateAction => ({
    type: FilterByDateActionTypes.TURN_OFF_FILTER_BY_DATE,
});
