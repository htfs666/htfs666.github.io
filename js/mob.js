
document.addEventListener('DOMContentLoaded', function() {
    // 加载头部和尾部
    $('#header-placeholder').load('templates/header.html', function() {
        // 头部加载完成后初始化移动菜单
        $('.mobile-menu-toggle').click(function() {
            $('.main-navigation').toggleClass('active');
        });
    });
    
    $('#footer-placeholder').load('templates/footer.html', function() {
        // 页脚加载完成后初始化返回顶部按钮
        $('#back-to-top').click(function() {
            $('html, body').animate({scrollTop: 0}, 500);
        });
    });
});
