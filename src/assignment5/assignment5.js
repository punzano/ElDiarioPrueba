const sortDigits = (number) => (
    number.toString().split('').sort(function(a, b) {
        return b - a;
    }).join('')
);

const setEventListeners = () => {
    document.querySelector(`.assignment-5 button`).addEventListener('click', () => {
        const numberNode = document.querySelector('.number');
        const number = numberNode.innerText;
        const sortedNumber = sortDigits(number);
        document.querySelector('.number').innerText = sortedNumber;
    });
};

const initAssignment5 = () => {
    setEventListeners();
};

export { initAssignment5 };