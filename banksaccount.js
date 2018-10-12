class Account{

    withdraw(){

    }
    deposit(){

    }
}
class savingsAccount extends Account{
    constructor(minBalance=500){
        super();
        this.balance =minBalance;
    }
    deposit(amount){
        if (amount < 0){
            return 'Invalid deposit amount';
        }
        this.balance += amount;
        return this.balance;

    }
    withdraw(amount){
        if(this.amount > this.balance){
            return 'cannot withdraw beyond the current account balance';
            else if  (this.balance < 0){
                return 'Invlid withdraw amount';
            }
        }

    }
    

}