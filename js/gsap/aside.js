document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#vacancy-toggle-btn');
    let vacancyWrap = document.querySelector('.aside__vacancy');
    let vacancyCounter = document.querySelector('.vacancy-left-text span');

    let vw100 = document.documentElement.clientWidth;

    document.body.addEventListener('click', evt => {
        evt.preventDefault();
        if (!evt.target.closest('.vacancyToggleBtn')) {
            return;
        }

        if (vacancyWrap.classList.contains('hidden')) {
            vacancyWrap.classList.remove('hidden');

            let i = 200;
            let counter = setInterval(() => {
                i += 23;
                vacancyCounter.textContent = i;
                if (i >= 1777) {
                    clearInterval(counter);
                    vacancyCounter.textContent = 1777;
                }
            }, 25);

            gsap.to('.vacancy-left', { duration: 0.5, x: 370 });
            setTimeout(() => {
                gsap.to('.vacancy-main', { duration: 0.7, x: vw100 });
            }, 200);
        } else {
            gsap.to('.vacancy-main', { duration: 0.8, x: 0 });
            setTimeout(() => {
                gsap.to('.vacancy-left', { duration: 0.5, x: 0 });
            }, 300);
            setTimeout(() => {
                vacancyWrap.classList.add('hidden');
            }, 700);
        }
    });
})