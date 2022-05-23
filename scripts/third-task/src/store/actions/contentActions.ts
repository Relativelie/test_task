import { ContentAction, ContentTypes } from '../../types/contentTypes';
import { DataType } from '../../types/dataType';

export const saveContent = (data: DataType[]):ContentAction => ({
    type: ContentTypes.SAVE_CONTENT,
    data,
});
