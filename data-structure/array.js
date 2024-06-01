class ArrayZ{
    constructor(initialValues = []){
        this.length = 0;
        this.data = {};
        for (let i = 0; i < initialValues.length; i++) {
            this.push(initialValues[i]);
        }
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
}

const newArr = new ArrayZ([2,2,3])

console.log(newArr)