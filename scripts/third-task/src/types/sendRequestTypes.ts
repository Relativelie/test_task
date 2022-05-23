import { DataType } from "./dataType";


export interface SendRequestState {
    isRequestLoading: boolean,
    isRequestSuccess: boolean,
    isRequestFatal: boolean,
    isRequestError: boolean,
    requestErrorText: string,
    errorCode: null | number,
    getResult: DataType[],
}

export enum SendRequestActionTypes {
    SEND_REQUEST_BEGIN = 'SEND_REQUEST_BEGIN',
    SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS',
    SEND_REQUEST_FATAL = 'SEND_REQUEST_FATAL',
    SEND_REQUEST_ERROR = 'SEND_REQUEST_ERROR',
    SAVE_GET_REQUEST = 'SAVE_GET_REQUEST',
}

interface SendRequestBegin {
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN
}

interface SendRequestSuccess {
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS
}

interface SendRequestError {
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value: number
}

interface SendRequestFatal {
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
}

interface SaveGetRequest {
    type: SendRequestActionTypes.SAVE_GET_REQUEST,
    value: DataType[]
}

export type SendRequestAction =
    | SendRequestBegin
    | SendRequestSuccess
    | SendRequestError
    | SendRequestFatal
    | SaveGetRequest;
