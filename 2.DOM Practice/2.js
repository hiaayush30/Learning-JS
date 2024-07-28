//image swapping with loading button
const btn = document.querySelector('#swap');
let interval;

btn.addEventListener('click', (e) => {
    clearInterval(interval);
    let count = 20;
    interval = setInterval(() => {
        console.log('Hello');
        const progress = document.querySelector('#progress');
        progress.style.width = count + "%";
        count += 1;
        if (progress.style.width == "100%") {
            const img1 = document.querySelector('#img1');
            const img2 = document.querySelector('#img2');
            const temp = img1.src;
            img1.src = img2.src;
            img2.src = temp;
            progress.style.width = "0%";
            clearInterval(interval);
        }
    }, 10)
})


