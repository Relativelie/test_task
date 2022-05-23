export interface ContentState {
    content: any
}

export enum ContentTypes {
    SAVE_CONTENT = 'SAVE_CONTENT'
}

interface SaveContent {
    type: ContentTypes.SAVE_CONTENT,
    data: any
}

export type ContentAction =
    SaveContent
