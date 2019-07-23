let rootNode = document.getElementById('root');
const addNewActionField = document.getElementById('add-action-field');
const addNewActionButton = document.getElementsByClassName('add-action-btn')[0];
const actionField = document.getElementsByClassName('action-field')[0];
const maxAmount = 10;
let setDisable = (element) => {
    element.setAttribute('disabled', '');
}
let removeDisable = (element) => {
    element.removeAttribute('disabled', '');
}
let addNewAction = () => {
    if (addNewActionField.value) {
        let newField = actionField.cloneNode(true);
        newField.firstElementChild.nextElementSibling.value = addNewActionField.value;
        rootNode.append(newField);
        addNewActionField.value = '';
    }
    if (document.getElementsByClassName('action-field').length > maxAmount) {
        setDisable(addNewActionField);
        setDisable(addNewActionButton);
        let notification = document.createElement('h4');
        notification.innerHTML = 'Maximum item per list are created’ is displayed.'
        rootNode.prepend(notification);
    }
}
addNewActionButton.addEventListener('click', () => {
    addNewAction();
});
function ActionIcon(elem) {
    this.edit = () => {
        event.target.previousElementSibling.previousElementSibling.style.display = 'none';
        event.target.style.display = 'none';
        event.target.previousElementSibling.style.border = '1px solid gray';
        event.target.previousElementSibling.style.width = '18.2%';
        removeDisable(event.target.previousElementSibling);
        event.target.nextElementSibling.style.display = 'block';
    }
    this.save = () => {
        event.target.style.display = 'none';
        setDisable(event.target.previousElementSibling.previousElementSibling);
        event.target.previousElementSibling.previousElementSibling.style.border = 'none';
        event.target.previousElementSibling.previousElementSibling.style.width = '16%';
        event.target.previousElementSibling.style.display = 'block';
        event.target.previousElementSibling.previousElementSibling.style.border = 'none';
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'block';
    }
    this.delete = () => {
        if (addNewActionField.hasAttribute('disabled', '')) {
            removeDisable(addNewActionField);
            removeDisable(addNewActionButton);
            rootNode.removeChild(document.getElementsByTagName('h4')[0]);
        }
        event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    }
    this.done = () => {
        setDisable(event.target);
    }
    let self = this;
    elem.addEventListener('click', (e) => {
        let target = e.target;
        let action = target.getAttribute('data-action');
        if (action) {
            self[action]();
        }
    })
}
(() => new ActionIcon(rootNode))();