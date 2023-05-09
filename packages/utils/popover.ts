import { getBounding } from "./DOM"

interface POPSTYLE {
    position: string,
    inset: string,
    transform: string
}

// popover与triggerElm之间的间隔
const gap = {normal:4, large: 8}
// normal 偏移比例
const normalRate = 1/2
// start 偏移比例
const startRate =  1/3
// end 偏移比例
const endRate = 2/3

// 计算组件在浏览器窗口中的位置
export function getPopStyle(triggerElm:HTMLElement, placement:string, showArrow:boolean):POPSTYLE{
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = triggerElm
    // bottom-start, bottom-end
    const [pos, subPos] = placement.split('-')
    const popGap = showArrow?gap.large:gap.normal
    const offsetRate = subPos?(subPos === 'start'?startRate:endRate) : normalRate 
    let top:number = 0,left:number = 0, transform:string = ''
    
    switch(pos) {
        case 'bottom': 
            transform = 'translateX(-50%)'
            top = offsetTop + offsetHeight + popGap
            left = offsetLeft + offsetWidth * offsetRate
            break
        case 'top':
            transform = 'translate(-50%,-100%)'
            top = offsetTop - popGap
            left = offsetLeft + offsetWidth * offsetRate
            break
        case 'right':
            transform = 'translateY(-50%)'
            top = offsetTop + offsetHeight * offsetRate
            left = offsetLeft + offsetWidth + popGap
            break
        case 'left':
            transform = 'translate(-100%,-50%)'
            top = offsetTop + offsetHeight * offsetRate
            left = offsetLeft - popGap
            break
    }
    
    return {
        position: 'absolute',
        inset: `${top}px auto auto ${left}px`,
        transform,
    }
}

export function calcPopWidth(elm:HTMLElement):string {
    const {offsetWidth} = elm
    return `${offsetWidth*(4/3)}px`
}

export function popIsOverflow(triggerElm:Element,popWidth:number, popHeight:number,placement:string,showArrow:boolean):boolean {
    const pos = placement.split('-')[0]
    const bounding = getBounding(triggerElm)
    const popGap = showArrow?gap.large:gap.normal

    switch(pos) {
        case 'top':
        case 'bottom':
            if(bounding[pos] < popHeight + popGap) return true
            break
        case 'left':
        case 'right':
            if(bounding[pos] < popWidth + popGap) return true
            break
        default:
            return false
    }
}

export function togglePlacement(placement:string):string {
    const toggleMap = new Map<string,string>([
        ['top', 'bottom'],
        ['bottom', 'top'],
        ['left', 'right'],
        ['right', 'left'],
    ]);
    const [pos, subPos] = placement.split('-')
    if(toggleMap.has(pos)) return subPos?`${toggleMap.get(pos)}-${subPos}`:toggleMap.get(placement)
    return placement
}


export function arrowTransform(popWidth:number,popHeight:number, placement:string):string {
    let transform = ''
    switch(placement) {
        case 'bottom': 
        case 'bottom-start':
        case 'bottom-end':
            transform = `translateY(${-popHeight/2}px)`
            break
        case 'top':
        case 'top-start':
        case 'top-end':
            transform = `translateY(${popHeight/2}px)`
            break
        case 'right':
        case 'right-start':
        case 'right-end':
            transform = `translateX(${-popWidth/2}px)`
            break
        case 'left':
        case 'left-start':
        case 'left-end':
            transform = `translateX(${popWidth/2}px)`
            break
    }

    return transform
}