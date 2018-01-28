# Lab 10- Stacks and Queues

### Installation:

- Fork this repo
- Clone this to your local machine
- Once in local machine, move into lab-hector 
- Use the terminal to instal dependencies, first do: npm init -y to install packages 
- npm i jest -D (go to package.json and change : ```"scripts": {
    "test": "jest --verbose"
  },```

- Add: .eslintrc, .eslintignore and .gitignore

#### Stack Module:
We build a constructor with 3 methods: 

push()

``` push(val) {
    if (this.size === this.maxSize) throw new Error('stack is too large');

    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }```
  pop()
  ```  pop() {
    if (!this.top) throw new Error('nothing to remove');

    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
  }```
  peek()
  ``` peek() {
    if (!this.top) throw new Error('nothing in stack');
    return this.top;
  }
};```
#### Run test for stack:
in your terminal run ```npm test stack.test.js```
#### Run tests for queue:
in your terminal run ```npm test queue.test.js```

