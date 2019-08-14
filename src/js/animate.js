// landing page animation
const bannerNav = document.querySelector('.animated-nav');
const bannerLeft = document.querySelector('.animated-left');
const bannerRight = document.querySelector('.animated-right');
const bannerBottom = document.querySelector('.animated-bottom');
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
),

tl.fromTo(
    bannerBottom,
    0.9,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.9"
)


// installMediaQueryWatcher("(min-width: 600px)", function(matches) {
//     if(matches) {
        
       
    // } else {
        // animate mobile properties
//         tl.fromTo(
//             bannerNav,
//             2,
//             { height: "0%" },
//             { height: "100%", ease: Power2.easeInOut },
//         )
//         // animate mobile properties
//     }
// });

// function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
//     var mql = window.matchMedia(mediaQuery);
//     mql.addEventListener(function(e) { return layoutChangedCallback(e.matches); });
//     layoutChangedCallback(mql.matches);
// }