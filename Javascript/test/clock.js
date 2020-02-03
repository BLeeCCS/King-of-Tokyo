export function clock(stopCount) {
    let clock = null;
    let clockCount = 0;
    clock = setInterval(() => {
        clockCount++;
        console.log(clockCount);
        if(clockCount == stopCount) {
            clearInterval(clock);
        }
    }, 1000);
}