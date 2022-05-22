const showErrors = (requestObj) => {
    const errorElem = document.querySelector('.requestResults__errorTxt');
    errorElem.style.display = 'block';
    errorElem.textContent = requestObj.errorText;
    if (requestObj.errorCode !== '') {
        const errorCodeElem = document.querySelector('.requestResults__errorCode');
        errorCodeElem.style.display = 'block';
        errorCodeElem.textContent = `Error code: ${requestObj.errorCode}`;
    }
};

const fatalRequest = (requestObj) => {
    requestObj.requestFatal();
    showErrors(requestObj);
};

const errorRequest = (resultValue, requestObj) => {
    requestObj.requestError(resultValue.code);
    showErrors(requestObj);
};

const showSuccessText = (reqObj) => {
    const successElem = document.querySelector('.requestResults__successTxt');
    successElem.style.display = 'block';
    successElem.innerHTML = reqObj.successTxt;
};

const loaderOnOff = (requestObj) => {
    const displayValue = requestObj.isRequestLoading ? 'block' : 'none';
    document.querySelector('.spinnerBlock').style.display = displayValue;
};

const sendRequest = async (reqObj, method, url, headers, body) => {
    try {
        reqObj.requestBegin();
        loaderOnOff(reqObj);
        let request;
        if (body !== undefined) {
            request = await fetch(url, {
                method,
                headers,
                body: JSON.stringify(body),
            });
        } else {
            request = await fetch(url, {
                method,
                headers,
            });
        }
        const result = await request.json();
        if (result.status === 'error') {
            errorRequest(
                result,
                reqObj,
                reqObj.errorClassName,
                reqObj.errorCodeClassName,
            );
        } else {
            reqObj.requestSuccess();
            reqObj.saveRequestData(result);
            showSuccessText(reqObj);
        }
        loaderOnOff(reqObj);
    } catch {
        fatalRequest(reqObj);
        loaderOnOff(reqObj);
    }
};

export const hideRequestResTexts = () => {
    document.querySelector('.requestResults__errorTxt').style.display = 'none';
    document.querySelector('.requestResults__successTxt').style.display = 'none';
    document.querySelector('.requestResults__errorCode').style.display = 'none';
};

export const createStudent = async (e, postReqObj, url, headers) => {
    postReqObj.resetAllValues();
    hideRequestResTexts();
    const body = {
        name: e.target.form[0].value,
        surname: e.target.form[1].value,
        midname: e.target.form[2].value,
        birthday: e.target.form[3].value,
        traininggroup: e.target.form[4].value,
    };
    sendRequest(postReqObj, 'POST', url, headers, body);
};

export const getStudents = async (getReqObj, url, headers) => {
    await sendRequest(getReqObj, 'GET', url, headers);
};

export const deleteStudent = async (e, delReqObj, url, headers) => {
    delReqObj.resetAllValues();
    hideRequestResTexts();
    const urlWithId = `${url}/${e.target.form[0].value}`;
    sendRequest(delReqObj, 'DELETE', urlWithId, headers);
};
