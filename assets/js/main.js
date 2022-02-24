
let stop;
let i = 100;

document.querySelector('#btn').addEventListener('click', () => {
    let countdown = () => {
        i--;
        document.body.childNodes[1].childNodes[1].innerText = `${i}%`

        if (i == 0) {
            clearInterval(stop)
        }
    }
    stop = setInterval(countdown, 1000);
})


