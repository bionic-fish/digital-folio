// landing page animation
const bannerNav = document.querySelector('.animated-nav');
const bannerLeft = document.querySelector('.animated-left');
const bannerRight = document.querySelector('.animated-right');
const bannerBtn = document.querySelector('.animated-btn');
const bannerTitle = document.querySelector('.animated-title');

const tl = new TimelineMax();

tl.fromTo(
    bannerNav,
    1.1,
    { width: '100%' },
    { width: '10%', ease: Power2.easeInOut },
),
tl.fromTo(
    bannerNav,
    1,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.9"
),

tl.fromTo(
    bannerLeft,
    1.1,
    { width: '0%' },
    { width: '40%', ease: Power2.easeInOut },
    "-=1",
),

tl.fromTo(
    bannerRight,
    1.1,
    { width: '0%' },
    { width: '80%', ease: Power2.easeInOut },
    "-=2.1",
),
tl.fromTo(
    bannerRight,
    1.1,
    { height: '0%' },
    { height: '100%', ease: Power2.easeInOut },
),
tl.fromTo(
    bannerTitle,
    0.9,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
)