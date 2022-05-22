import OptionsTemplate from './components/optionsTemplate.js';
import RequestTemplate from './components/requestTemplate.js';

const showSelectedBlock = (className) => {
    document.querySelector(`.${className}`).style.display = 'block';
    document.querySelector(`.${className}`).classList.add('selectedBlock');
};

const hideBlock = (className) => {
    document.querySelector(`.${className}`).style.display = 'none';
};

const loaderOnOff = (requestObj) => {
    const displayValue = requestObj.isRequestLoading ? 'block' : 'none';
    document.querySelector('.loadingSpinner').style.display = displayValue;
};

const allOptions = {
    adding: 'creatingForm',
    deleting: 'deletingForm',
    showing: 'studentList',
};

const selectOption = (event) => {
    const selectedOption = event.target.dataset.option;
    if (document.querySelector('.selectedBlock') !== null) {
        document.querySelector('.selectedBlock').style.display = 'none';
    }
    showSelectedBlock(allOptions[selectedOption]);
};

const showErrors = (requestObj, className, codeClassName) => {
    document.querySelector(`.${className}`).style.display = 'block';
    console.log(codeClassName);
    if (codeClassName !== undefined) {
        document.querySelector(
            `.${codeClassName}`,
        ).textContent = `Error code: ${requestObj.errorCode}`;
    }
};

const fatalRequest = (requestObj, className) => {
    requestObj.requestFatal();
    showErrors(requestObj, className);
};

const errorRequest = (resultValue, requestObj, className, codeClassName) => {
    requestObj.requestError(resultValue.code);
    showErrors(requestObj, className, codeClassName);
};

const showSuccessText = (className) => {
    document.querySelector(`.${className}`).style.display = 'block';
};

const hideRequestResTexts = (errorClass, successClass) => {
    document.querySelector(`.${errorClass}`).style.display = 'none';
    document.querySelector(`.${successClass}`).style.display = 'none';
};

const createStudent = async (e, postReqObj, url, headers) => {
    e.preventDefault();
    postReqObj.resetAllValues();
    hideRequestResTexts(
        postReqObj.errorClassName,
        postReqObj.successClassName,
    );
    const body = {
        name: e.target.form[0].value,
        surname: e.target.form[1].value,
        midname: e.target.form[2].value,
        birthday: e.target.form[3].value,
        traininggroup: e.target.form[4].value,
    };
    try {
        postReqObj.requestBegin();
        loaderOnOff(postReqObj);
        const request = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
        const result = await request.json();
        if (result.status === 'error') {
            console.log(1);
            errorRequest(
                result,
                postReqObj,
                postReqObj.errorClassName,
                postReqObj.errorCodeClassName,
            );
        } else {
            postReqObj.requestSuccess();
            showSuccessText(postReqObj.successClassName);
        }
        loaderOnOff(postReqObj);
    } catch {
        console.log(2);
        fatalRequest(postReqObj, postReqObj.errorClassName);
        loaderOnOff(postReqObj);
    }
};

const getRequest = new RequestTemplate(false, false, '', []);
const deleteRequest = new RequestTemplate(false, false, '', []);
const postRequest = new RequestTemplate(
    false,
    false,
    false,
    '',
    [],
    'creatingForm__errorTxt',
    'creatingForm__successTxt',
    'creatingForm__errorCode',
);

const pageOptions = new OptionsTemplate(false, false, false);

const allOptionsOnPage = document.querySelectorAll('.options__btn');
allOptionsOnPage[0].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[1].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[2].addEventListener('click', (e) => selectOption(e));

// const postUrl = 'http://localhost:8080/api/student';
const postUrl = 'https://usersediting.free.beeceptor.com/id';
// const postUrl = 'http://localhost:8080/api';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

document
    .querySelector('.creatingForm__createBtn')
    .addEventListener('click', (e) => createStudent(e, postRequest, postUrl, headers));
