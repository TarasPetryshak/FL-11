const rootNode = document.getElementById('root');
let arrayForLocalStorage = [];
let lengthStorage;
if (localStorage.getItem('lengthStorage') === null) {
    lengthStorage = 0;
} else {
    lengthStorage = localStorage.getItem('lengthStorage');
}
const buttonMainPage = document.getElementById('button-main-page');
const newTaskInput = document.getElementById('add-task-input');
const buttonCancelAdd = document.getElementById('cancel-button-add-page');
const buttonSaveAdd = document.getElementById('save-button-add-page');
const buttonCancelModify = document.getElementById('cancel-button-modify-page');
const buttonSaveModify = document.getElementById('save-button-modify-page');
const modifyInput = document.getElementById('modify-input');
const mainPage = document.getElementById('main-page');
const addPage = document.getElementById('add');
const modifyPage = document.getElementById('modify');
const addInput = document.getElementById('add-task-input');
const customAlert = document.querySelector('.custom-alert');
const customAlertModify = document.querySelector('.custom-alert-modify');
const timeoutAlert = 2000;
buttonMainPage.addEventListener('click', () => {
    mainPage.style.display = 'none';
    addPage.style.display = 'block';
})
let hintHidden = () => {
    let hintElement = document.querySelector('.main-page-hint');
    if (mainPage.lastElementChild === hintElement) {
        hintElement.style.display = 'block';
    } else {
        hintElement.style.display = 'none';
    }
}
buttonCancelAdd.addEventListener('click', () => {
    mainPage.style.display = 'block';
    addPage.style.display = 'none';
    newTaskInput.value = '';
    hintHidden();
})
let greatAndSetElement = (elem) => {
    const amountI = 3;
    let item = document.createElement('div');
    item.classList.add('item');
    for (let i = 0; i < amountI; i++) {
        let input = document.createElement('input');
        item.appendChild(input);
    }
    item.firstElementChild.removeAttribute('type');
    item.firstElementChild.setAttribute('type', 'checkbox');
    item.firstElementChild.classList.add('doneButton');
    item.lastElementChild.removeAttribute('type');
    item.lastElementChild.setAttribute('type', 'checkbox');
    item.lastElementChild.classList.add('removeButton');
    item.firstElementChild.nextElementSibling.setAttribute('value', elem);
    item.firstElementChild.nextElementSibling.setAttribute('disabled', '');
    item.firstElementChild.nextElementSibling.classList.add('descriptionItem');
    if (event) {
        item.firstElementChild.nextElementSibling.value = newTaskInput.value;
    }
    hintHidden();
    let itemCollection = document.getElementsByClassName('item');
    for (let j of itemCollection) {
        if (j.firstElementChild.checked) {
            mainPage.insertBefore(item, j.firstElementChild.parentElement);
            newTaskInput.value = '';
            return;
        }
    }
    mainPage.appendChild(item);
    newTaskInput.value = '';
}
let drawInitialPage = () => {
    for (let i = 0; i < lengthStorage; i++) {
        let temporaryVariable = JSON.parse(localStorage.getItem(`${i}`)).description;
        greatAndSetElement(temporaryVariable);
    }
    let doneButtonCollection = document.getElementsByClassName('doneButton');
    for (let i = 0; i < doneButtonCollection.length; i++) {
        doneButtonCollection[i].checked = JSON.parse(localStorage.getItem(`${i}`)).isDone;
    }
}
drawInitialPage();
buttonSaveAdd.addEventListener('click', () => {
    let items = document.getElementsByClassName('descriptionItem');
    const checkChrome = -1;
    for (let i of items) {
        if (i.value === newTaskInput.value) {
            if (navigator.userAgent.indexOf('Chrome') === checkChrome) {
                customAlert.style.left = '78%';
            }
            customAlert.style.display = 'block';
            setTimeout(() => {
                customAlert.style.display = 'none'
            }, timeoutAlert);
            return;
        }
    }
    if (!newTaskInput.value) {
        return;
    }
    greatAndSetElement();
    mainPage.style.display = 'block';
    addPage.style.display = 'none';
    hintHidden();
    updateArray();
    updateLocalStorage();
})
buttonCancelModify.addEventListener('click', () => {
    mainPage.style.display = 'block';
    modifyPage.style.display = 'none';
    modifyInput.value = '';
    hintHidden();
})
buttonSaveModify.addEventListener('click', () => {
    let items = document.getElementsByClassName('descriptionItem');
    const checkChrome = -1;
    for (let i of items) {
        if (i.value === modifyInput.value) {
            if (navigator.userAgent.indexOf('Chrome') === checkChrome) {
                customAlert.style.left = '78%';
            }
            customAlertModify.style.display = 'block';
            setTimeout(() => {
                customAlertModify.style.display = 'none'
            }, timeoutAlert);
            return;
        }
    }
    if (!modifyInput.value) {
        return;
    }
    mainPage.style.display = 'block';
    modifyPage.style.display = 'none';
    document.getElementById('modifyValueInput').value = modifyInput.value;
    document.getElementById('modifyValueInput').removeAttribute('id');
    updateArray();
    updateLocalStorage();
})
let updateArray = () => {
    let length = arrayForLocalStorage.length;
    let temporaryObject = {
        description: '',
        isDone: false
    };
    for (let i = 0; i < length; i++) {
        arrayForLocalStorage.pop();
    }
    let itemColl = document.getElementsByClassName('descriptionItem');
    let itemCheckedCollection = document.getElementsByClassName('doneButton');
    for (let i = 0; i < itemColl.length; i++) {
        temporaryObject.description = itemColl[i].value;
        temporaryObject.isDone = itemCheckedCollection[i].checked;
        arrayForLocalStorage.push(JSON.stringify(temporaryObject));
    }
}
let updateLocalStorage = () => {
    for (let i = 0; i < arrayForLocalStorage.length; i++) {
        localStorage.setItem(`${i}`, arrayForLocalStorage[i]);
    }
    lengthStorage = arrayForLocalStorage.length;
    localStorage.setItem('lengthStorage', `${lengthStorage}`);
}
function ActionItem(elem) {
    this.removeButton = () => {
        mainPage.removeChild(event.target.parentElement);
    }
    this.descriptionItem = () => {
        const checkChrome = -1;
        if (event.target.previousElementSibling.checked) {
            if (navigator.userAgent.indexOf('Chrome') === checkChrome) {
                customAlert.style.left = '78%';
            }
            customAlertModify.lastElementChild.innerHTML = `You can't edit already done item`;
            customAlertModify.style.display = 'block';
            setTimeout(() => {
                customAlertModify.style.display = 'none'
            }, timeoutAlert);
            customAlertModify.lastElementChild.innerHTML = `You can't add already exist item`
        } else {
            mainPage.style.display = 'none';
            modifyPage.style.display = 'block';
            modifyInput.value = event.target.value;
            event.target.setAttribute('id', 'modifyValueInput');
        }
    }
    this.doneButton = () => {
        let moveItem = event.target.parentElement;
        if (event.target.checked) {
            mainPage.removeChild(moveItem);
            mainPage.appendChild(moveItem);
            event.target.nextElementSibling.style.background = 'gray';
        } else {
            event.target.nextElementSibling.style.background = 'transparent';
            let item = mainPage.removeChild(moveItem);
            let itemCollection = document.getElementsByClassName('item');
            for (let j of itemCollection) {
                if (j.firstElementChild.checked) {
                    mainPage.insertBefore(item, j.firstElementChild.parentElement);
                    return;
                }
            }
            mainPage.appendChild(moveItem);
        }
    }
    let self = this;
    elem.addEventListener('click', (e) => {
        let target = e.target;
        let action = target.getAttribute('class');
        if (action) {
            self[action]();
            hintHidden();
            updateArray();
            updateLocalStorage();
        }
    })
}
(() => new ActionItem(rootNode))();



