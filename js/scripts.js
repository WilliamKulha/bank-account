//Business logic

//bank account constructor:
function BankAccount(name, initialDeposit, balance) {
  this.userName = name;
  this.firstDeposit = initialDeposit;
  this.balance = balance;
}

//method for adding a deposit.
BankAccount.prototype.makeDeposit = function(deposit) {
  this.balance += deposit;
}
//method for subtracting a withdrawl.
BankAccount.prototype.makeWithdrawl = function(withdrawl) {
  this.balance -= withdrawl;
}


//User logic

$(function(){
  $('#submit_new_account').submit(function(event) {
    event.preventDefault();
    let name = $('#user_name').val();
    let initialDeposit = parseInt($('#initial_deposit').val());
    let newBalance = initialDeposit;
    const userAccount = new BankAccount(name, initialDeposit, newBalance);
    userAccount.makeWithdrawl(5);
    console.log(userAccount);
  })
})
