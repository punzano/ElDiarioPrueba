import moment from 'moment';

const formatDate = (userDate) => moment(userDate).format('YYYYMMDD');

const setEventListeners = () => {
    document.querySelector(`.assignment-3 button`).addEventListener('click', () => {
        const dateNode = document.querySelector('.date');
        const date = dateNode.innerText;
        const formattedDate = formatDate(date);
        document.querySelector('.date').innerText = formattedDate;
    });
};

const initAssignment3 = () => {
    setEventListeners();
};

export { initAssignment3 };