/*

    A balance property.
    A constructor to initialize the account with a balance.
    Methods for depositing and withdrawing money.
    A getter to check the balance.
    A setter to update the balance directly.

*/


class BankAccount {
    // Constructor initializes the account with an owner and initial balance
    constructor(owner, balance = 0) {
      this.owner = owner;
      this._balance = balance; // Using an underscore to indicate this is private
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
        console.log(`${amount} deposited. New balance is ${this._balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        console.log(`${amount} withdrawn. New balance is ${this._balance}`);
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }
  
    // Getter to check the balance
    get balance() {
      return "Your balance is " + this._balance;
    }
  
    // Setter to update the balance (with some simple validation)
    set balance(newBalance) {
      if (newBalance >= 0) {
        this._balance = newBalance;
      } else {
        console.log("Balance cannot be negative.");
      }
    }
  }
  


// Create a new bank account object for a user named 'Kevin'
const kevinAccount = new BankAccount("Kevin", 100);

// Deposit some money
kevinAccount.deposit(50); // Output: 50 deposited. New balance is 150

// Try to withdraw money
kevinAccount.withdraw(30); // Output: 30 withdrawn. New balance is 120

// Check the balance using the getter
console.log(kevinAccount.balance); // Output: 120

// Set the balance using the setter
kevinAccount.balance = 200; // Updates balance to 200
console.log(kevinAccount.balance); // Output: 200

// Try to set a negative balance (won't work)
kevinAccount.balance = -50; // Output: Balance cannot be negative.
