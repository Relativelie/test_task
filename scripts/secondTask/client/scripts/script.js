import RequestTemplate from './components/requests/requestTemplate.js';
import {
    hideRequestResTexts,
    createStudent,
    getStudents,
    deleteStudent,
} from './components/requests/requestFunctions.js';
import {
    showSelectedBlock,
    hideBlock,
    allOptions,
    showStudentsTable,
    removeEmptyInputBorder,
} from './components/showSelectedOption.js';

const selectOption = async (event, getReqObj, url, headers) => {
    hideRequestResTexts();
    hideBlock();
    const selectedOption = event.target.dataset.option;
    if (allOptions[selectedOption] !== 'studentList') {
        showSelectedBlock(allOptions[selectedOption]);
    } else {
        await getStudents(getReqObj, url, headers);
        showStudentsTable(getReqObj);
    }
};

const checkValues = (value) => {
    if (value.trim().length === 0) return true;
    return false;
};

const prepareValues = (event, getReqObj, url, headers, type) => {
    event.preventDefault();
    removeEmptyInputBorder();
    const formValues = event.target.form;
    for (let i = 0; i < formValues.length - 1; i++) {
        if (checkValues(formValues[i].value)) {
            formValues[i].classList.add('_emptyInput');
        }
    }
    if (document.querySelector('._emptyInput') === null && type === 'delete') {
        deleteStudent(event, getReqObj, url, headers);
    } else if (document.querySelector('._emptyInput') === null && type === 'create') {
        createStudent(event, getReqObj, url, headers);
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

const requestValues = {
    createStudent: {
        url: 'http://localhost:8080/api/student',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
    getStudents: {
        url: 'http://localhost:8080/api/students',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
    delStudent: {
        url: 'http://localhost:8080/api/student',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
};

const allOptionsOnPage = document.querySelectorAll('.options__btn');
allOptionsOnPage[0].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[1].addEventListener('click', (e) => selectOption(e));
allOptionsOnPage[2].addEventListener('click', (e) => selectOption(
    e,
    getRequest,
    requestValues.getStudents.url,
    requestValues.getStudents.headers,
));

document
    .querySelector('.creatingForm__createBtn')
    .addEventListener('click', (e) => prepareValues(
        e,
        postRequest,
        requestValues.createStudent.url,
        requestValues.createStudent.headers,
        'create',
    ));

document
    .querySelector('.deletingForm__deleteBtn')
    .addEventListener('click', (e) => prepareValues(
        e,
        deleteRequest,
        requestValues.delStudent.url,
        requestValues.delStudent.headers,
        'delete',
    ));
