export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay = 2000,
): (...args: Parameters<T>) => void {
    let timer: number | null = null

    return function (...args: Parameters<T>) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(...args)
            timer = null
        }, delay)
    }
}
