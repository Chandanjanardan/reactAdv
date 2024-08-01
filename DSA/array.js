function MyArray(){
    this.lenght =0;
    this.data={}

   
}
MyArray.prototype.push = function(element){
    this.data[this.lenght]=element
    this.lenght++
    return this.lenght
   
}
MyArray.prototype.get = function(index){
    return this.data[index]
}

const newArray = new MyArray()
newArray.push("hello")
newArray.push("mello")
newArray.push("tello")
console.log(newArray.get(2))

// cusotm array with push method
// make a get method to get at specific index