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

    setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
    const clientsCount = document.getElementsByClassName('features__clients-count')[0];
    increaseNumberAnimationStep(0, clientsCount, 5000);
}

// initIncreaseNumberAnimation();


const budget = document.getElementById('budget');
budget.addEventListener('change', (e) => {

    const form = document.querySelector('#form form');

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

let isAnimationInited = false;

function updateScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header__scrolled');
    } else {
        header.classList.remove('header__scrolled');
    }

    if (!isAnimationInited) {

        const countElementPosition = document.querySelector('.features__clients-count').offsetTop;
        const windowBottomPosition = window.scrollY + window.innerHeight;

        if (windowBottomPosition >= countElementPosition) {
            initIncreaseNumberAnimation();
            isAnimationInited = true;
        }
    }

}

function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', updateScroll);
document.querySelectorAll('button.more-button[href^="#"], a[href^="#"]').forEach(a => addSmoothScroll(a));