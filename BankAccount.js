function Account(accountNumber, accountHolderName, accountBalance) {
  this.accountNumber = accountNumber;
  this.accountHolderName = accountHolderName;
  this.accountBalance = accountBalance;
}
function Savings(isSalary, accountNumber, accountHolderName, accountBalance) {
  this.isSalary = isSalary;
  this.accountNumber = accountNumber;
  this.accountHolderName = accountHolderName;
  this.accountBalance = accountBalance;
  this.withdraw = function (amount) {
    if (this.accountBalance > 0 && this.accountBalance < 100) {
      console.log("Balance is less than 100 rs can't withdraw.");
    }
    if (this.accountBalance >= 100) {
      this.accountBalance = this.accountBalance - amount;
      console.log("Your money after debiting : " + this.accountBalance);
    }

    if (this.accountBalance <= 0) {
      console.log("you had zero balance");
    }
  };
  this.getCurrentBalance = function () {
    console.log("Your current Account balance is : " + this.accountBalance);
  };
}
function Current(odLimit, accountNumber, accountHolderName, accountBalance) {
  this.odLimit = odLimit;
  this.accountNumber = accountNumber;
  this.accountHolderName = accountHolderName;
  this.accountBalance = accountBalance;
  this.withdraw = function (amount) {
    if (odLimit > 500) {
      if (this.accountBalance > 100) {
        this.accountBalance = this.accountBalance - amount;
        console.log(
          "Your balance after debiting the money is : " + this.accountBalance
        );
      }
    } else {
      console.log("Your odLimit for Current acocunt is less than 500");
    }
  };
  this.getCurrentBalance = function () {
    console.log("current Account balance is : " + this.accountBalance);
  };
}

var obj1 = new Account(103, "Bhargav", 100000);
console.log(obj1);
// this is savings object
var objSavings = new Savings("true", 102, "Raju", 80000);
console.log(objSavings);
console.log(objSavings.withdraw(300));
console.log(objSavings.getCurrentBalance());
//this is Current object
var objCurrent = new Current(600, 101, "Santosh", 50050);
console.log(objCurrent);
console.log(objCurrent.withdraw(200));
console.log(objCurrent.getCurrentBalance());
