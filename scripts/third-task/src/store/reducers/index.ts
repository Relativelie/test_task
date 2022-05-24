import { combineReducers } from 'redux';
import { sendRequestReducer } from './sendRequestReducer';
import { searchReducer } from './searchReducer';
import { contentReducer } from './contentReducer';
import { filterByDateFlagReducer } from './filterByDateFlagReducer';

export const reducers = {
    sendRequestReducer,
    searchReducer,
    contentReducer,
    filterByDateFlagReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
