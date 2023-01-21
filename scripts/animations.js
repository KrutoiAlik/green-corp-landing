const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {

    if (i > endNumber) {
        return;
    }

    if (i === endNumber) {
        element.innerText = i + '+';
    } else {
        element.innerText = i;
    }

    i = i + 100;

    console.log(i);
    setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
    const clientsCount = document.getElementsByClassName('features__clients-count')[0];
    increaseNumberAnimationStep(0, clientsCount, 5000);
}

initIncreaseNumberAnimation();

const budget = document.getElementById('budget');
budget.addEventListener('change', (e) => {

    const form = document.getElementById('form');

    if (e.target.value === 'other') {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        const input = document.createElement('input');
        input.placeholder = 'Введите ваш вариант';
        input.type = 'text';

        formContainer.appendChild(input);

        form.insertBefore(formContainer, document.querySelector('.form__submit'));
    } else {

        const otherInput = document.querySelector('.form__other-input');
        if (otherInput) {
            form.removeChild(otherInput);
        }
    }
});