var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log("Area of the Rectangle is : " + this.width * this.height);
  };
};
//using prototype
Rectangle.prototype.getArea = function () {
  console.log(
    "Getting Area using prototype property : " + this.width * this.height
  );
};
//calling objectsmaking intances
var myRectangle1 = new Rectangle(40, 10);
var myRectangle2 = new Rectangle(50, 10);

console.log(Rectangle.prototype);
//calling method which is created using prototype property
myRectangle1.getArea();
myRectangle2.getArea();
