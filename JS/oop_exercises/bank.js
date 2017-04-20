function Bank() {
  this.customers = {};
}

Bank.prototype.addCustomer = function(name, amount=0) {
  this.customers[name] = amount;
};

Bank.prototype.deposit = function(name, amount) {
  this.customers[name] += amount;
};

Bank.prototype.withdraw = function(name, amount) {
  amount <= this.customers[name] ? this.customers[name] -= amount
    : console.log('Error: Your balance is lower than the amount of money intented to withdraw!');
    
};

Bank.prototype.printAccount = function(name) {  
  console.log(`${name} account is ${this.customers[name]}`);
};

Bank.prototype.printBank = function() {
  Object.keys(this.customers).forEach(this.printAccount.bind(this));
}

var bank = new Bank();
bank.addCustomer('Sheldor');
bank.deposit('Sheldor', 10);
bank.addCustomer('Raj');
bank.deposit('Raj', 10000);
bank.withdraw('Raj', 100);
bank.withdraw('Sheldor', 100);

bank.printBank();