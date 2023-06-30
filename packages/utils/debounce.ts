
export function debounce(callback:Function, timeout:number = 100): EventListener {
    let timer:NodeJS.Timeout 
    return function(...args:any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);       
        },timeout)
    }
}