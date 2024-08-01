function MyArray(){
    this.lenght =0;
    this.data={}

   
}
MyArray.prototype.push = function(element){
    this.data[this.lenght]=element
    this.lenght++
    return this.lenght
   
}

const newArray = new MyArray()
newArray.push("hello")
newArray.push("hello")
newArray.push("hello")
console.log(newArray)

// cusotm array with push method