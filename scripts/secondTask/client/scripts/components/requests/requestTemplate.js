export default class RequestTemplate {
    constructor(
        isRequestLoading,
        isRequestSuccess,
        isRequestError,
        errorCode,
        result,
        successTxt,
    ) {
        this.isRequestLoading = isRequestLoading;
        this.isRequestSuccess = isRequestSuccess;
        this.isRequestError = isRequestError;
        this.errorCode = errorCode;
        this.result = result;
        this.successTxt = successTxt;
    }

    errorText = 'Something went wrong. Please try later or consult your system administrator.';

    requestSuccess = () => {
        this.isRequestSuccess = true;
        this.isRequestLoading = false;
    };

    requestBegin = () => {
        this.isRequestLoading = true;
    };

    requestFatal = () => {
        this.isRequestLoading = false;
    };

    requestError = (value) => {
        this.isRequestLoading = false;
        this.isRequestError = true;
        this.errorCode = value;
    };

    saveRequestData = (data) => {
        this.result = [data];
    };

    resetAllValues = () => {
        this.isRequestLoading = false;
        this.isRequestSuccess = false;
        this.isRequestError = false;
        this.errorCode = '';
        this.result = [];
    };
}
