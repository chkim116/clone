var sliderWrapper = document.getElementsByClassName ('section'),
    sliderContainer = document.getElementsByClassName ('slidesection'),
    slides = document.getElementsByClassName('slider'),
    slideCount = slides.length;

var currentIndex = 0,
    topHeight = 0;

var navPrev = document.getElementsByName('prev'),
    navNext = document.getElementsByName ('next');

    // 슬라이드 높이 부모의 높이로 지정하기 (젤 큰 크기로)

    function settingTallestSlide() {
        for (var i = 0; i < slideCount; i++) {
            if (sildes[i].offsetHeight > topHeight) {
                topHeight = slides[i].offsetHeight;
            }
        }
        
        sliderWrapper[0].style.height = topHeight + 'px';
        sliderContaine[0].style.height = topHeight + 'px';
    }

    // 슬라이드 가로 배치
     for (var i = 0; i < slideCount; i++) {
         slides[i].style.left = i*100 + '%';
     }