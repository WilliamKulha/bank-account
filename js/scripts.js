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
    console.log(userAccount);
    $('.new_account').remove();
    $('.balance_here').text(`$${userAccount.balance}`);

      $('#make_deposit').submit(function(event) {
        event.preventDefault();
        let deposit = parseInt($('#current_deposit').val());
        userAccount.makeDeposit(deposit);
        $('.balance_here').text(`$${userAccount.balance}`);
        $('#make_deposit').trigger('reset');
      });

      $('#make_withdrawl').submit(function(event) {
        event.preventDefault();
        let withdrawl = parseInt($('#current_withdrawl').val());
        userAccount.makeWithdrawl(withdrawl);
        $('.balance_here').text(`$${userAccount.balance}`);
        $('#make_withdrawl').trigger('reset');
      })
  })
})
