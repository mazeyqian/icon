function Dictionary () {
    this.add = add;
    this.dataStore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}
function add (key, value) {
    this.dataStore[key] = value;
}
function find (key) {
    return this.dataStore[key];
}
function remove (key) {
    delete this.dataStore[key];
}
function showAll () {
    let datakeys = Array.prototype.slice.call(Object.keys(this.dataStore));
    for (let key in datakeys.sort()) {
        console.log(`${datakeys[key]} -> ${this.dataStore[datakeys[key]]}`);
    }
}
// 计数
function count () {
    let n = 0;
    for (let key in Object.keys(this.dataStore)) {
        ++n;
    }
    return n;
}
// 清空
function clear () {
    Object.keys(this.dataStore).forEach((key) => {
        delete this.dataStore[key];
    }, this);
}