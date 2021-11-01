$('#fullPage').fullpage({
    sectionSelector: '.part',
    afterLoad: function (link, index) {
        if (index == 2) {
            // alert(index);
            const anim = gsap.timeline();

            anim.to('.s2__content', { duration: 0.7, x: '-100%' })
                // .to()

            // let main = document.querySelector('#fullPage');

            // ScrollTrigger.create({
            //     animation: anim,
            //     trigger: '#fullPage',
            //     start: 'top',
            //     // end: 'bottom',
            //     end: () => main.offsetWidth / 2,
            //     scrub: true,
            //     pin: true
            // });
        }
    }
});