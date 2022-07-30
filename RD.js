let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let users = ['Thanh Minh', 'Hong Nhung', 'Dang Khoa'];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});