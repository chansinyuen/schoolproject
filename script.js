const style = document.createElement('style')
style.innerHTML = `
@keyframes floating {
    0% {translate: 0px 0px}
    50% {translate: 0px -15px}
    100% {translate: 0px 0px}
}
`
document.head.prepend(style)

function waitForElement(selector, callback, waitTime) {
    // Check if an element matching the selector exists in the DOM
    if (document.querySelector(selector)) {
        // If the element is found, invoke the callback function
        callback();
    } else {
        // If the element is not found at first, set up a timeout to recheck after waitTime
        setTimeout(function() {
            // Recursively call waitForElement with the same selector, callback, and waitTime values
            waitForElement(selector, callback, waitTime);
        }, waitTime);
    }
}

waitForElement('div[style="top: 0px; left: 0px; width: 617.659px; height: 164.064px; padding: 4px; pointer-events: auto; justify-content: center;"]', function() {
    document.querySelectorAll('div[style="top: 0px; left: 0px; width: 617.659px; height: 164.064px; padding: 4px; pointer-events: auto; justify-content: center;"]')[0].parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('path[d="M7,7C7,-4.597979746446603 16.40202025355334,-14 28,-14C39.59797974644666,-14 49,-4.597979746446603 49,7C49,18.59797974644672 39.59797974644666,28 28,28C16.40202025355334,28 7,18.59797974644672 7,7"]').parentElement.parentElement.parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('div[style="width: 966.302px; height: 1345.2px; transform: scale(1.00193, 1.00472) translate(107.899px, 24px) translate(483.151px, 672.6px) rotate(0deg) translate(-483.151px, -672.6px); transform-origin: 0px 0px; opacity: 1;"]').parentElement.parentElement.parentElement.parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('path[d="M52.5,7L363.34175170000003,7C372.73059244,7 380.34175170000003,14.61115925 380.34175170000003,24L380.34175170000003,92.46349293C380.34175170000003,101.85233367000001 387.95291095,109.46349293 397.34175170000003,109.46349293L827.06214469,109.46349293"]').parentElement.parentElement.parentElement.parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('div[style="top: 0px; left: 0px; width: 343.577px; height: 164.064px; padding: 4px; pointer-events: auto; justify-content: center;"]').parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('path[d="M52.5,7L132.82130560000002,7C142.21014635,7 149.82130560000002,14.61115925 149.82130560000002,24L149.82130560000002,47.03743263C149.82130560000002,56.42627338 157.43246485,64.03743263 166.82130560000002,64.03743263L423.60914416,64.03743263"]').parentElement.parentElement.parentElement.parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    document.querySelector('div[style="top: 0px; left: 0px; width: 617.659px; height: 285.064px; padding: 4px; pointer-events: auto; justify-content: center;"]').parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    page3()
}, 500);

function page3() {
    waitForElement('a[href="#page-3"]', function() {
        document.querySelector('a[href="#page-3"]').parentElement.parentElement.parentElement.style.animation = 'floating 3s ease-in-out infinite'
    }, 500);
}
