import { combineReducers } from 'redux';
import { sendRequestReducer } from './sendRequestReducer';
import { searchReducer } from './searchReducer';
import { contentReducer } from './contentReducer';
import { FilterByStatusReducer } from './filterByStatusReducer';
import { filterByDateFlagReducer } from './filterByDateFlagReducer';

export const reducers = {
    sendRequestReducer,
    searchReducer,
    contentReducer,
    FilterByStatusReducer,
    filterByDateFlagReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
