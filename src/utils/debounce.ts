export function debounce(callback, delay = 2000) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback.apply(this, args)
            timer = null;
        }, delay);
    }
}
