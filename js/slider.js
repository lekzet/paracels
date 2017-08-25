/*    slider    */

var slider = document.querySelector(".slider");

var slide = document.querySelectorAll(".slide");
var sliderPager = document.querySelectorAll(".slider__pager a");

var slideActive = document.querySelector(".slide.active");
var sliderPagerActive = document.querySelector(".slider__pager a.active");

var sliderPrev = document.querySelector(".slider__prev");
var sliderNext = document.querySelector(".slider__next");

var time = setInterval(autorotate, 5000);


sliderPrev.addEventListener('click', function(event) {
    event.preventDefault();

    slideActive = document.querySelector(".slide.active");
    slideActive.className = 'slide';
    sliderPagerActive = document.querySelector(".slider__pager a.active");
    dataSlide = sliderPagerActive.getAttribute('data-slide');
    sliderPagerActive.className = '';
    
    if(dataSlide == 0) {
        dataSlide = sliderPager.length - 1;
    }
    else {
        dataSlide = dataSlide - 1;
    };
    
    slide[dataSlide].className = 'slide active';
    sliderPager[dataSlide].className = 'active';
});


sliderNext.addEventListener('click', function(event) {
    event.preventDefault();

    slideActive = document.querySelector(".slide.active");
    slideActive.className = 'slide';
    sliderPagerActive = document.querySelector(".slider__pager a.active");
    dataSlide = sliderPagerActive.getAttribute('data-slide');
    sliderPagerActive.className = '';
    
    if(dataSlide == sliderPager.length - 1) {
        dataSlide = 0;
    }
    else {
        dataSlide = +dataSlide + 1;
    };
    
    slide[dataSlide].className = 'slide active';
    sliderPager[dataSlide].className = 'active';
});



for (i = 0; i < sliderPager.length; i++) {
    sliderPager[i].addEventListener('click', function(event) {
    event.preventDefault();

    for (i = 0; i < sliderPager.length; i++) {
        sliderPager[i].className = '';
    };
    
    for (i = 0; i < slide.length; i++) {
        slide[i].className = 'slide';
    };
    
    this.className = 'active';
    dataSlide = this.getAttribute('data-slide');

    slide[dataSlide].className = 'slide active';
    });
};


function autorotate(){
    sliderPagerActive = document.querySelector(".slider__pager a.active");
    dataSlide = sliderPagerActive.getAttribute('data-slide');

    slide[dataSlide].className = 'slide';
    sliderPager[dataSlide].className = '';
    
    if(dataSlide == sliderPager.length - 1) {
        dataSlide = 0;
    }
    else {
        dataSlide = +dataSlide + 1;
    };
    
    slide[dataSlide].className = 'slide active';
    sliderPager[dataSlide].className = 'active';
    
    slider.addEventListener('mouseover', function(event) {
        clearInterval(time);
    });
    
    slider.addEventListener('mouseout', function(event) {
        clearInterval(time);
        time = setInterval(autorotate, 5000);
    });
};