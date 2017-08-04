export class SufixTree {
  protected root: SufixTreeNode;
  protected freqMap = {};
  protected maxFreq: number;
  constructor(protected str: string){
    this.create(str);
  }

  public print(node: SufixTreeNode = null, depth: number = 0) {
    let str = '';
    str += ' '.repeat(depth);
    if (node === null) {
      node = this.root;
    } else if (node.isLast()) {
      str += '┗';
      str += node.getStr();
    } else {
      str += '┣';
      str += node.getStr();
    }
    str += "\n";
    
    for(let i = 0; i < node.getChidren().length; i ++) {
      str = str + this.print(node.getChidren()[i], depth + 1);
    }
    return str;
  }
  
  public freqSubstr() {
    const freqResult = {}
    this.maxFreq = 0;
    this.buildFreqSubstr(this.root, '');
    for(let str in this.freqMap) {
      if(this.freqMap[str] === this.maxFreq) {
        freqResult[str] = this.maxFreq;
      }
    }
    return freqResult;
  }
  
  protected buildFreqSubstr(node: SufixTreeNode = null, path: string = null) {
    let childPath: string;
    let str = node.getStr();
    const subCount = node.subCount();
    if(str === null) {
      str = '';
    }
    childPath = path + str;
    if(!node.isLast()) {
      node.getChidren().forEach(childNode => {
        this.buildFreqSubstr(childNode, childPath);
      });
    }
    if(childPath.length > 1) {
      this.freqMap[childPath] = subCount;
      if(this.maxFreq < subCount) {
        this.maxFreq = subCount;
      }
    }
  }

  protected create(str: string) {
    this.root = new SufixTreeNode();
    this.root.setPos(null);
    this.root.setStr(null);
    const len = str.length;
    for(let i = len -  1; i >= 0; i --) {
      this.root.add(str.substr(i, len - i), i);
    }
  }
}

export class SufixTreeNode {
  protected children: SufixTreeNode[] = [];
  protected pos;
  protected str;

  public find(str: string = null) {
    let foundNode = null;
    this.children.forEach(childNode => {
      if(str[0] === childNode.str[0]) {
        foundNode = childNode;
      }
    });
    return foundNode;
  }

  public add(str: string, pos: number) {
    const foundNode = this.find(str);
    if(foundNode) {
      if(str.indexOf(foundNode.str) === 0) {
          const childStr = str.substr(foundNode.str.length);
          foundNode.add(childStr, pos);
      } else {
        foundNode.insertStr(str, pos);
      }
    } else {
      const newNode: SufixTreeNode = new SufixTreeNode();
      newNode.pos = pos;
      newNode.str = str;
      newNode.setLast(pos);
      this.children.push(newNode);
    }
  }
  
  public insertStr(str, pos) {
    const len = this.str.length;
    const isLast = this.isLast();
    let i;
    for(i = 0; i < len; i ++) {
      if(this.str[i] === str[i]) { continue; }
      break;
    }
    
    if(isLast) {
      const nodeRight = new SufixTreeNode();
      nodeRight.pos = this.pos;
      nodeRight.str = this.str.substr(i);
      nodeRight.setLast(this.pos);
      
      const node: SufixTreeNode = new SufixTreeNode();
      node.pos = pos;
      node.str = str.substr(i);
      node.setLast(pos);
      
      this.pos = null;
      this.str = this.str.substr(0, i);
      if(isLast) {
        this.children = [];
      }
      this.children.push(node);
      this.children.push(nodeRight);
    }
  }

  public setLast(pos) {
    const newNode: SufixTreeNode = new SufixTreeNode();
    newNode.pos = pos;
    newNode.str = '$';
    this.children = [newNode];
  }

  public setPos(pos: number) {
    this.pos = pos;
    return this;
  }

  public getPos = () => {
    return this.pos;
  }

  public setStr = (str: string) => {
    this.str = str;
    return this;
  }

  public getStr() {
    return this.str;
  }

  public getChidren() {
    return this.children;
  }
  
  public isLast() {
    return (
      this.children && this.children.length === 1 
      && this.children[0].str === '$'
      || this.str === '$'
    ); 
  }
  
  public subCount() {
    let count = 0;
    this.children.forEach(childNode => {
      count ++;
      if(!childNode.isLast()) {
        count += childNode.subCount();
      }
    });
    return count;
  }
}
