export class Queue{
    public insertIndex:number = 0;
    public storage: Object = {};
    public removeIndex: number = 0;
    private totalSize = 0;

    public enqueue(value: number){
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

    public dequeue(): number{
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

    public printQueue(){
        for (var i = 0; i < Object.keys( this.storage).length; i++) {
            let currentKey = Object.keys(this.storage)[i];
            console.log('Current Key: ', currentKey, 'Current Value: ', this.storage[currentKey]);
        }
    }
}