import {
    SendRequestAction,
    SendRequestActionTypes,
    SendRequestState,
} from '../../types/sendRequestTypes';

const initialState: SendRequestState = {
    isRequestLoading: false,
    isRequestSuccess: false,
    isRequestFatal: false,
    isRequestError: false,
    requestErrorText: 'Something went wrong...',
    errorCode: null,
    getResult: [],
};

export const sendRequestReducer = (
    state = initialState,
    action: SendRequestAction,
): SendRequestState => {
    switch (action.type) {
        case SendRequestActionTypes.SEND_REQUEST_BEGIN: {
            return {
                ...state,
                isRequestLoading: true,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_SUCCESS: {
            return {
                ...state,
                isRequestSuccess: true,
                isRequestLoading: false,
                isRequestFatal: false,
                isRequestError: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_ERROR: {
            return {
                ...state,
                isRequestError: true,
                errorCode: action.value,
                isRequestLoading: false,
                isRequestSuccess: false,
                isRequestFatal: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_FATAL: {
            return {
                ...state,
                isRequestFatal: true,
                isRequestLoading: false,
                isRequestSuccess: false,
            };
        }
        case SendRequestActionTypes.SAVE_GET_REQUEST: {
            return {
                ...state,
                getResult: action.value,
            };
        }
        default:
            return state;
    }
};
