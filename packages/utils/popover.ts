// 计算组件在浏览器窗口中的位置
export function getClientXY(elm:HTMLElement) {
    console.log("popover getClientXY",elm)
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = elm
    return `${offsetTop + offsetHeight + 4}px auto auto ${offsetLeft + offsetWidth/2}px`
}