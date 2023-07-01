
export function throttle(callback:Function, timeout:number = 100): EventListener {
    let timer:NodeJS.Timeout | null
    return function(...args:any[]) {
        if(!timer) {
            timer = setTimeout(() => {
                callback.apply(this, args);    
                timer = null
            },timeout)
        }
    }
}