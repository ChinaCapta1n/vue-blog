function dou(arg) {
    if(arg < 10) {
        return "0" + arg;
    }
    return arg;
}

export const formatTime = (timestamp) => {
    let time = new Date(Number(timestamp));
    let y = time.getFullYear(),
        m = time.getMonth() + 1,
        d = time.getDate();
    return y + '-' + dou(m) + '-' + dou(d);
}