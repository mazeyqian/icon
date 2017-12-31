function Dictionary () {
    this.add = add;
    this.dataStore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
function add (key, value) {
    this.dataStore[key] = value;
}