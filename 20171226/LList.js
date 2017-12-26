// Node类
function Node (element) {
    this.element = element;
    this.next = null;
}
// LinkedList类
function LList () {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}
// 查找
function find (item) {
    let currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}
// 插入
function insert (newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
// 显示
function display () {
    let currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode.element);
    }
}
// 检查下一个节点
function findPrevious (item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}
// 删除
function remove (item) {
    let prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
    }
}