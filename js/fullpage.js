$('#fullPage').fullpage({
    sectionSelector: '.part',
    scrollOverflow: true,
    afterLoad: function (link, index) {
        if (index == 2) {
            // alert(index);
            const anim = gsap.timeline();
            anim.fromTo('.s2__content', {x: 0}, { duration: 0.7, x: '-100%' })
                .fromTo('#img1', { height: 0 }, { height: 'auto', duration: 0.5 })
                .fromTo('#img3', { height: 0 }, { height: 'auto', duration: 0.7 })
                .fromTo('#img2', { width: 0 }, { width: '42%', duration: 0.5 })
                .fromTo('.s2-top__left span', { opacity: 0 }, { opacity: 1, duration: 1.5 });
        }
    }
});