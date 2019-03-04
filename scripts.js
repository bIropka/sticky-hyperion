var sticky = document.getElementById('sticky-block');

document.addEventListener('scroll', function () {
    if(window.innerWidth >= 1200) {
        setStickyPosition(sticky);
    }
});


function setStickyPosition(block) {

    var parent = block.parentNode,
        parentTop = parent.getBoundingClientRect().top,
        parentHeight = parent.offsetHeight,
        stickyHeight = block.offsetHeight,
        parentPaddings = parseInt(getComputedStyle(parent).paddingTop) + parseInt(getComputedStyle(parent).paddingBottom);

    if (parentTop + parentHeight - stickyHeight - parentPaddings <= 0) {
        block.className = 'toBottom';
    } else if (parentTop <= 0) {
        block.className = 'toTop';
    } else {
        block.className = '';
    }

}
