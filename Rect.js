var Rectangle = function (
  width,
  height //declaring object with "constructor function"
) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log("Area of the Rectangle is : " + this.width * this.height);
  };
};

var myRectangle1 = new Rectangle(40, 10); //calling objects/making intances
var myRectangle2 = new Rectangle(50, 10);



console.log(myRectangle1.width); //calling objects' properties
console.log(myRectangle1.height);
myRectangle1.area();
console.log("---------------------");
console.log(myRectangle2.width); //calling objects' properties
console.log(myRectangle2.height);
myRectangle2.area();





