import { SendRequestAction, SendRequestActionTypes } from '../../types/sendRequestTypes';

export const sendRequestBegin = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN,
});

export const sendRequestSuccess = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS,
});

export const sendRequestError = (value: number): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value,
});

export const sendRequestFatal = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
});

export const saveGetResult = (value: any[]): SendRequestAction => ({
    type: SendRequestActionTypes.SAVE_GET_REQUEST,
    value,
});

export const sendGet = (url:string, headers:HeadersInit) => async (dispatch: any) => {
        try {
            dispatch(sendRequestBegin());
            const request = await fetch(
                url,
                {
                    method: 'GET',
                    headers,
                },
            );
            const result = await request.json();
            if (result.status === 'error') {
                dispatch(sendRequestError(result.code));
                console.log(1)
            } else {

                dispatch(sendRequestSuccess());
                dispatch(saveGetResult(result));
                console.log(2)
                console.log(result)
            }
        } catch (err) {
            console.log(3)
            dispatch(sendRequestFatal());
        }
    };
