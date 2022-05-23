import { DataType } from './dataType';

export interface ContentState {
    content: DataType[]
}

export enum ContentTypes {
    SAVE_CONTENT = 'SAVE_CONTENT',
}

interface SaveContent {
    type: ContentTypes.SAVE_CONTENT,
    data: DataType[]
}

export type ContentAction =
    SaveContent;
