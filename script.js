window.addEventListener('load', function () {
    const slidecount = document.querySelectorAll('#slider-wrapper ul li').length;
    // console.log(slidecount)
    const slidewindth = document.querySelector('#slider-wrapper').offsetWidth;
    // console.log(slidewindth)
    const totalwidth = slidecount * slidewindth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    let leftpos = 0;
    let counter = 0;
    slider.style.width = totalwidth;
    next.addEventListener('click', function (event) {
        event.preventDefault();
        counter = (counter + 1) % slidecount;
        leftpos = `-${counter * slidewindth}px`;
        slider.style.left = leftpos;
    })
    prev.addEventListener('click', function (event) {
        event.preventDefault();
        counter = (slidecount + counter - 1) % slidecount;
        leftpos = `-${counter * slidewindth}px`;
        slider.style.left = leftpos;
    })
});