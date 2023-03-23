const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timer;

const createTimerAnimator = () => {
    return (seconds) => {
        let hh = Math.floor(seconds / 3600);
        let mm = Math.floor((seconds % 3600) / 60);
        let ss = Math.floor(seconds % 60);

        hh = hh < 10 ? '0' + hh : hh;
        mm = mm < 10 ? '0' + mm : mm;
        ss = ss < 10 ? '0' + ss : ss;

        timerEl.innerHTML = `${hh}:${mm}:${ss}`;

        timer = setInterval(() => {
            seconds--;
            if (seconds == 0) clearInterval(timer);

            hh = Math.floor(seconds / 3600);
            mm = Math.floor((seconds % 3600) / 60);
            ss = Math.floor(seconds % 60);

            hh = hh < 10 ? '0' + hh : hh;
            mm = mm < 10 ? '0' + mm : mm;
            ss = ss < 10 ? '0' + ss : ss;

            timerEl.innerHTML = `${hh}:${mm}:${ss}`;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    if (!seconds) return;

    clearInterval(timer);

    animateTimer(seconds);

    inputEl.value = '';
});
