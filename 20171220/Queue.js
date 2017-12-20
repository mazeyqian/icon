// 队列类
function Queue () {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
// 入队
function enqueue (element) {
    this.dataStore.push(element);
}
// 出队
function dequeue () {
    return this.dataStore.shift();
}
// 读取队首的元素
function front () {
    return this.dataStore[0];
}
// 读取队尾的元素
function back () {
    return this.dataStore[this.dataStore.length - 1];
}
// 显示队列内所有元素
function toString () {
    let retStr = ``;
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += `${this.dataStore[i]}\n`;
    }
    return retStr;
}
// 判断队列是否为空
function empty () {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}