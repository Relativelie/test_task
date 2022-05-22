export const showSelectedBlock = (className) => {
    document.querySelector(`.${className}`).classList.add('selectedBlock');
};

export const removeEmptyInputBorder = () => {
    const allEmptyInputs = document.querySelectorAll('._emptyInput');
    if (allEmptyInputs !== null) {
        for (let i = 0; i < allEmptyInputs.length; i++) {
            allEmptyInputs[i].classList.remove('_emptyInput');
        }
    }
};

export const hideBlock = () => {
    if (document.querySelector('.selectedBlock') !== null) {
        document.querySelector('.selectedBlock').classList.remove('selectedBlock');
    }
    removeEmptyInputBorder();
};

export const allOptions = {
    adding: 'creatingForm',
    deleting: 'deletingForm',
    showing: 'studentList',
};

export const showStudentsTable = (getReqObj) => {
    const { students } = getReqObj.result[0];
    document.querySelector('.studentsTable__tbody').innerHTML = '';
    document.querySelector('.studentList').classList.add('selectedBlock');
    students.map((item) => {
        document.querySelector('.studentsTable__tbody').innerHTML += `
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
