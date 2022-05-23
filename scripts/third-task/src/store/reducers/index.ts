import { combineReducers } from 'redux';
import { sendRequestReducer } from './sendRequestReducer';
import { filterReducer } from './filterReducer';
import { searchReducer } from './searchReducer';
import { contentReducer } from './contentReducer';

export const reducers = {
    sendRequestReducer,
    filterReducer,
    searchReducer,
    contentReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
