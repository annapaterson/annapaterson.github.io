const picOne = document.querySelector('.pic-one');
const picTwo = document.querySelector('.pic-two');

picOne.addEventListener('click', function (e) {
    picOne.style.display = 'none';
    picTwo.style.display = 'block';
});

picTwo.addEventListener('click', function (e) {
    picTwo.style.display = 'none';
    picOne.style.display = 'block';
});
