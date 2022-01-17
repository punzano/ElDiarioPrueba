const objAssignment6 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: 'street',
        number: 'number'
    },
};

const accessor = (obj, defaultValue, path) => {
    if (path) {
        const steps = path.split('.');
        let result = obj;
        steps.forEach(step => {
            if(result[step]) {
                result = result[step];
            } else {
                result = defaultValue;
            }
        });
        return result;
    } 

    return (path) => path;
};

const setOnClickGetProp = (buttonClass, path) => {
    document.querySelector(`.assignment-6 ${buttonClass}`).addEventListener('click', () => {
        const result = accessor(objAssignment6, 'ElDiario.es', path);
        document.querySelector('.assignment-6 .object').innerHTML = '';
        document.querySelector('.assignment-6 .object').innerText = result;
    });
};

const setEventListeners = () => {
    setOnClickGetProp('.existing-prop', 'address.city');
    setOnClickGetProp('.non-existing-prop', 'non.existing.path');
    setOnClickGetProp('.withoutPath');
};

const initAssignment6 = () => {
    document.querySelector('.assignment-6 .object').innerHTML = JSON.stringify(objAssignment6);
    setEventListeners();
};

export { initAssignment6 };