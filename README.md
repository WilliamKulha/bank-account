# _Bank Account_

#### _A dummy webpage that mimics a bank account management page, 10-14-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD and object-oriented Javascript with learnhowtoprogram.com. It takes user input about (their name and initial deposit), and then lets them deposit and withdraw funds while displaying an up-to-date balance._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input, creating a new account object** | User input: 'Billy Bob' '5000' | Output: BankAccount {name: Billy Bob, initialDeposit: 5000, balance: 5000} |
**Program lets user withdraw funds** | Input: withdraw 500 | Output: balance: 4500 |
**Program lets user deposit funds** | Input: deposit 500| Output: balance: 5000  |
**Program creates 'money' out of nothing just like real bankers** | Input: initialDeposit: 5000 | Output: balance: 5000 WOW LIKE MAGIC!|




## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/zangiboy/bank-account.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_Program doesn't parse float. Program doesn't reject user input that is NaN_

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Bank Account Mockup is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
