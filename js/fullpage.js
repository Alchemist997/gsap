let header = document.querySelector('.main-header');
let bmwBtn = document.querySelector('#bmwBtn');
let leftSlide = document.querySelector('.s1');
let rightSlide = document.querySelector('.s2');
let rightSlideWrap;

let rightSlideWrapFinder = setInterval(() => {
    let targetEl = rightSlide.querySelector('.fp-scroller');
    if (targetEl) {
        rightSlideWrap = targetEl;
        clearInterval(rightSlideWrapFinder);
    }
}, 50);

setTimeout(() => {
    clearInterval(rightSlideWrapFinder);
}, 5000);

$('#fullPage').fullpage({
    sectionSelector: '.part',
    // autoScrolling: false,
    scrollOverflow: true,
    // scrollBar: true,
    controlArrows: false,
    onSlideLeave: function (section, origin, destination, direction) {
        if (destination == 0) {
            setTimeout(() => {
                header.classList.add('white');
            }, 200);
        } else {
            header.classList.remove('white');
        }
    }
});

let tl = gsap.timeline();
tl.to('#img1 .img-cap', { top: '100%', duration: 0.7, delay: 0.7 })
    .to('#img2 .img-cap', { bottom: '100%', duration: 0.7, delay: -0.7 })
    .to('#img3 .img-cap', { left: '100%', duration: 0.7, delay: -0.7 })
    .fromTo('.s2-top__left', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.pause();

let rightOnTop = 0;

document.addEventListener('wheel', evt => {
    if (evt.deltaY > 0 && leftSlide.classList.contains('sCurrent')) {
        $.fn.fullpage.moveSlideRight();
        leftSlide.classList.remove('sCurrent');
        rightSlide.classList.add('sCurrent');
        tl.play();
    } else if (evt.deltaY < 0 && !leftSlide.classList.contains('sCurrent') &&
        rightSlideWrap.style.transform.indexOf('translate(0px)') > -1) {

        if (rightOnTop <= 3) {
            rightOnTop++;
        } else {
            rightOnTop = 0;
            setTimeout(() => {
                $.fn.fullpage.moveSlideLeft();
            }, 1700);
            leftSlide.classList.add('sCurrent');
            rightSlide.classList.remove('sCurrent');
            tl.reverse();
        }
    }
    if (evt.deltaY > 0) rightOnTop = 0;
});

bmwBtn.addEventListener('click', () => {
    $.fn.fullpage.moveSlideRight();
    leftSlide.classList.remove('sCurrent');
    rightSlide.classList.add('sCurrent');
    tl.play();
});