import { DataType } from '../../types/dataType';
import { SearchAction, SearchActionTypes } from '../../types/searchTypes';

export const turnOffSearch = ():SearchAction => ({
    type: SearchActionTypes.TURN_OFF_SEARCH,
});

export const turnOnSearch = (data:DataType[]):SearchAction => ({
    type: SearchActionTypes.TURN_ON_SEARCH,
    data,
});
