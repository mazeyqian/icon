function Stack () {
    this.dataStore = [];
    this.top = 0; // 栈顶位置 相当于length，不是索引。
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
// push: 入栈
function push (element) {
    this.dataStore[this.top++] = element;
}
// pop: 出栈
function pop () {
    return this.dataStore[--this.top];
}
// peek: 取栈顶元素
function peek () {
    return this.dataStore[this.top - 1];
}
// clear: 清空栈
function clear () {
    this.top = 0;
}
// length: 栈内元素个数
function length () {
    return this.top;
}