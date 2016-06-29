window.onload = function () {

    const picOne = document.querySelector('.pic-one');

    picOne.style.visibility = 'visible';

    const bkgroundImageTarget = document.querySelector('.bkgroundImageTarget');

    bkgroundImageTarget.innerHTML = `<img class="pic-two main-picture"
                     sizes="(min-width: 725px) 50vw, 100vw"
                     srcset="
                             images/two/anna-paterson-2-w_200-fs8.png 200w,
                             images/two/anna-paterson-2-w_720-fs8.png 720w,
                             images/two/anna-paterson-2-w_1044-fs8.png 1044w,
                             images/two/anna-paterson-2-w_1284-fs8.png 1284w,
                             images/two/anna-paterson-2-w_1400-fs8.png 1400w"
                     src="images/two/anna-paterson-2-w_720-fs8.png"
                     alt="Anna Paterson">`;

    const picTwo = document.querySelector('.pic-two');

    picOne.addEventListener('click', function () {
        picOne.style.display = 'none';
        picTwo.style.display = 'block';
    });

    picTwo.addEventListener('click', function () {
        picTwo.style.display = 'none';
        picOne.style.display = 'block';
    });

};
