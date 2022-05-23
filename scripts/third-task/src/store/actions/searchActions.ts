import { SearchAction, SearchActionTypes } from '../../types/searchTypes';

export const turnOffSearch = ():SearchAction => ({
    type: SearchActionTypes.TURN_OFF_SEARCH,
});

export const turnOnSearch = (data:any):SearchAction => ({
    type: SearchActionTypes.TURN_ON_SEARCH,
    data,
});
