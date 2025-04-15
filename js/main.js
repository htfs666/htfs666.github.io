// 激活轮播图自动播放
var myCarousel = document.querySelector('#mainCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    wrap: true
})

// 滚动时导航栏效果
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').classList.add('shadow-sm')
        document.querySelector('.navbar').classList.add('bg-white')
    } else {
        document.querySelector('.navbar').classList.remove('shadow-sm')
        document.querySelector('.navbar').classList.remove('bg-white')
    }
})