// 首页特定功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'disableScrolling': true
        });
    }
    
    // 其他首页特定脚本...
});