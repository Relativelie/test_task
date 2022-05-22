export default class RequestTemplate {
    constructor(
        isRequestLoading,
        isRequestSuccess,
        isRequestError,
        errorCode,
        result,
        errorClassName,
        successClassName,
        errorCodeClassName,
    ) {
        this.isRequestLoading = isRequestLoading;
        this.isRequestSuccess = isRequestSuccess;
        this.isRequestError = isRequestError;
        this.errorCode = errorCode;
        this.result = result;
        this.errorClassName = errorClassName;
        this.successClassName = successClassName;
        this.errorCodeClassName = errorCodeClassName;
    }

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
        this.result = [...data];
    };

    resetAllValues = () => {
        this.isRequestLoading = false;
        this.isRequestSuccess = false;
        this.isRequestError = false;
        this.errorCode = '';
    };
}
