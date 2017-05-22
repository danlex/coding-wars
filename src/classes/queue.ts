export class Queue<T>{
    public insertIndex:number = 0;
    public storage: Object = {};
    public removeIndex: number = 0;
    private totalSize = 0;

    public enqueue(value: T){
        if(value){
            this.storage[this.insertIndex] = value;
            this.totalSize++;
            this.insertIndex++;
        }
    }

    public peek(){
        if(this.totalSize> 0){
            return this.storage[this.removeIndex];
        }
    }

    public dequeue(): T{
        if(this.insertIndex - this.removeIndex === 0){
            return undefined;
        }

        let elementToReturn = this.storage[this.removeIndex];
        delete this.storage[this.removeIndex];
        this.removeIndex++;
        this.totalSize--;
        return elementToReturn;
    }

    public size(){
        return this.totalSize;
    }

    public isEmpty(){
        return this.totalSize === 0;
    }

    public printQueue(){
        console.log('Current State of Q - Size: ', this.size(), ' This.storage', this.storage);
        for (var i = 0; i < Object.keys( this.storage).length; i++) {
            let currentKey = Object.keys(this.storage)[i];
            console.log('Current Key: ', currentKey, 'Current Value: ', this.storage[currentKey]);
        }
    }
}