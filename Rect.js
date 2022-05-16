//declaring object with constructor function
var Rectangle = function (
  width,
  height 
) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log("Area of the Rectangle is : " + this.width * this.height);
  };
};
 //calling objects/making intances
var myRectangle1 = new Rectangle(40, 10);
var myRectangle2 = new Rectangle(50, 10);


//calling objects properties
console.log(myRectangle1.width); 
console.log(myRectangle1.height);
myRectangle1.area();
console.log(":::::::::::::::::::");
//calling objects properties
console.log(myRectangle2.width); 
console.log(myRectangle2.height);
myRectangle2.area();





