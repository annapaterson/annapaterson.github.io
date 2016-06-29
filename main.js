const bkgroundImageTarget = document.querySelector('.bkgroundImageTarget');
bkgroundImageTarget.innerHTML = `<img class="pic-two main-picture"
                     sizes="(min-width: 725px) 50vw, 100vw"
                     srcset="
                             images/two/picture-two-fs8_vkb8w2_c_scale,w_200.png 200w,
                             images/two/picture-two-fs8_vkb8w2_c_scale,w_720.png 720w,
                             images/two/picture-two-fs8_vkb8w2_c_scale,w_1044.png 1044w,
                             images/two/picture-two-fs8_vkb8w2_c_scale,w_1284.png 1284w,
                             images/two/picture-two-fs8_vkb8w2_c_scale,w_1400.png 1400w"
                     src="images/two/picture-two-fs8_vkb8w2_c_scale,w_720.png"
                     alt="">`;

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
