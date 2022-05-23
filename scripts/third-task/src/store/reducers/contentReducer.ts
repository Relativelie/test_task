import { ContentAction, ContentState, ContentTypes } from '../../types/contentTypes';

const initialState: ContentState = {
    content: [],
};

export const contentReducer = (
    state = initialState,
    action: ContentAction,
): ContentState => {
    switch (action.type) {
        case ContentTypes.SAVE_CONTENT: {
            return {
                ...state,
                content: action.data,
            };
        }

        default:
            return state;
    }
};
