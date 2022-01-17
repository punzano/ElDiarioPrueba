const objAssignment2 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const removeProperty = (obj, prop) => obj.hasOwnProperty(prop) && delete obj[prop];

const setOnClickRemoveProp = (buttonClass, prop) => {
    document.querySelector(`.assignment-2 ${buttonClass}`).addEventListener('click', () => {
        const result = removeProperty(objAssignment2, prop);
        const objValue = document.createElement('span');
        const functionValue = document.createElement('span');
        objValue.innerText = JSON.stringify(objAssignment2);
        functionValue.innerText = result;
        document.querySelector('.assignment-2 .object').innerHTML = '';
        document.querySelector('.assignment-2 .object').appendChild(objValue);
        document.querySelector('.assignment-2 .object').appendChild(functionValue);
    });
};

const setEventListeners = () => {
    setOnClickRemoveProp('.existing-prop', 'city');
    setOnClickRemoveProp('.non-existing-prop', 'non-existing-prop');
};

const initAssignment2 = () => {
    document.querySelector('.assignment-2 .object').innerHTML = JSON.stringify(objAssignment2);
    setEventListeners();
};

export { initAssignment2 };