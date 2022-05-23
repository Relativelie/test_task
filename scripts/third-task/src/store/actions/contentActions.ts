import { ContentAction, ContentTypes } from '../../types/contentTypes';

export const saveContent = (data: any):ContentAction => ({
    type: ContentTypes.SAVE_CONTENT,
    data,
});
