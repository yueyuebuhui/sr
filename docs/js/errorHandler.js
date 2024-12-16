// 全局错误处理
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('全局错误:', {
        message: msg,
        url: url,
        line: lineNo,
        column: columnNo,
        error: error
    });
    return false;
};

// Promise错误处理
window.addEventListener('unhandledrejection', function(event) {
    console.error('未处理的Promise错误:', event.reason);
    event.preventDefault();
});

// 自定义错误处理函数
export function handleError(error, context = '') {
    console.error(`错误发生在 ${context}:`, error);
    alert('抱歉，出现了一些问题，请刷新页面重试');
} 