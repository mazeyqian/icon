// 列表类
function List () {
    this.listSize = 0; // 列表的元素个数
    this.pos = 0; // 列表的当前位置
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
// append: 给列表添加元素
function append (element) {
    this.dataStore[this.listSize++] = element;
}
// find: 在列表中查找某一元素 indexOf?
function find (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}
// remove: 从列表中删除元素
function remove (element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}
// length: 列表中有多少个元素 与listSize区别?
function length () {
    return this.listSize;
}
// toString: 显示列表中的元素
function toString () {
    return this.dataStore;
}
// insert: 向列表中插入一个元素
function insert (element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}
// clear: 清空列表中所有的元素
function clear () {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}
// contains: 判断给定值是否在列表中 find?
function contains (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}
// 遍历列表
function front () {
    this.pos = 0;
}
function end () {
    this.pos = this.listSize - 1;
}
function prev () {
    --this.pos;
}
function next () {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}
function currPos () {
    return this.pos;
}
function moveTo (position) {
    this.pos = position;
}
function getElement () {
    return this.dataStore[this.pos];
}
function hasNext () {
    return this.pos < this.listSize;
}
function hasPrev () {
    return this.pos >= 0;
}