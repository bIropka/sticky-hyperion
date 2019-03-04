var sticky = document.getElementById('sticky-block');

document.addEventListener('scroll', function () {
    if(window.innerWidth >= 768) {
        setStickyPosition(sticky);
    }
});


function setStickyPosition(block) {

    var parent = block.parentNode,
        parentTop = parent.getBoundingClientRect().top,
        parentHeight = parent.offsetHeight,
        stickyHeight = block.offsetHeight;


    if (parentTop + parentHeight - stickyHeight <= 0) {
        block.className = 'toBottom';
    } else if (parentTop <= 0) {
        block.className = 'toTop';
    } else {
        block.className = '';
    }

}

/*function setStickyPosition() {

}*/
