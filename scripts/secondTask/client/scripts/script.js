import OptionsTemplate from './components/optionsTemplate.js';
import RequestTemplate from './components/requestTemplate.js';

const showSelectedBlock = (className) => {
    document.querySelector(`.${className}`).classList.add('selectedBlock');
    hideRequestResTexts();
};

const hideBlock = () => {
    if (document.querySelector('.selectedBlock') !== null) {
        document.querySelector('.selectedBlock').classList.remove('selectedBlock');
    }
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

const selectOption = (event, getReqObj, getUrl, headers) => {
    const selectedOption = event.target.dataset.option;
    hideBlock();
    showSelectedBlock(allOptions[selectedOption]);
    if (allOptions[selectedOption] === 'studentList') {
        showStudents(getReqObj, getUrl, headers);
    }
};

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

const hideRequestResTexts = () => {
    document.querySelector('.requestResults__errorTxt').style.display = 'none';
    document.querySelector('.requestResults__successTxt').style.display = 'none';
    document.querySelector('.requestResults__errorCode').style.display = 'none';
};

const createStudent = async (e, postReqObj, url, headers) => {
    e.preventDefault();
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

const showStudents = async (getReqObj, url, headers) => {
    await sendRequest(getReqObj, 'GET', url, headers);
    const { students } = getReqObj.result[0];
    document.querySelector('.studentList__tbody').innerHTML = '';
    students.map((item) => {
        document.querySelector('.studentList__tbody').innerHTML += `
        <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.midname}</td>
                <td>${item.surname}</td>
                <td>${item.birthday}</td>
                <td>${item.traininggroup}</td>
        </tr>
        `;
    });
};

const deleteStudent = async (e, delReqObj, url, headers) => {
    e.preventDefault();
    delReqObj.resetAllValues();
    hideRequestResTexts();
    const urlWithId = `${url}/${e.target.form[0].value}`;
    sendRequest(delReqObj, 'DELETE', urlWithId, headers);
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

const getRequest = new RequestTemplate(
    false,
    false,
    false,
    '',
    [],
    'A list of students has been prepared',
);
const deleteRequest = new RequestTemplate(
    false,
    false,
    false,
    '',
    [],
    'The student was deleted',
);
const postRequest = new RequestTemplate(
    false,
    false,
    false,
    '',
    [],
    'The student was created',
);

const pageOptions = new OptionsTemplate(false, false, false);

const allOptionsOnPage = document.querySelectorAll('.options__btn');
allOptionsOnPage[0].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[1].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[2].addEventListener('click', (e) => selectOption(e, getRequest, getUrl, headers));

const postUrl = 'http://localhost:8080/api/student';
// const postUrl = 'https://usersediting.free.beeceptor.com/id';
// const postUrl = 'http://localhost:8080/api';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
const getUrl = 'http://localhost:8080/api/students';
const delUrl = 'http://localhost:8080/api/student';
document
    .querySelector('.creatingForm__createBtn')
    .addEventListener('click', (e) => createStudent(e, postRequest, postUrl, headers));
document
    .querySelector('.deletingForm__deleteBtn')
    .addEventListener('click', (e) => deleteStudent(e, deleteRequest, delUrl, headers));
