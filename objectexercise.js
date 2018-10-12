function BankAccount(){
                        this.deposit = function(damount){};
                        this.withdraw =function(wamount){};
}
var SavingsAccount = new BankAccount();

SavingsAccount.prototype.balance = 1000;
 // minimum balance

/*deposit to savings account*/
SavingsAccount.prototype.deposit = function(damount){
                                                        balance += damount;
                                                        if(balance<0){
                                                            return "Invalid deposit amount";
                                                        }
                                                        return balance;
                                                    };

 /*withdraw to savings account*/
SavingsAccount.prototype.withdraw = function(wamount){
   
                                                         if(balance<501){
                                                                         return "cannot withdraw beyond the minimum account balance";
                                                                         }
                                                         if(wamount<501){
                                                                            return "cannot withdraw beyond the current account balance";
                                                                         }

                                                       else if(balance<0){
                                                                                return "Invalid withdraw amount";
                                                                         }
       

                                                                        else balance = balance -wamount;

                                    
                                                                         return balance;
                                                                        };
var currentaccount = new BankAccount();//inheritance of current account

currentaccount.prototype.balance = 0; 

/*deposit to current account*/
SavingsAccount.prototype.deposit = function(damount){
                                                        if(damount<0){
                                                                      return "Invalid deposit amount";
                                                                     }
                                                                    else {
                                                                        
                                                                        balance += damount;
                                                                         
                                                          
                                                                        return balance;
                                                                         }

                                                                    };
                                            
currentaccount.prototype.withdraw = function(wamount){
   
                                                    if(wamount<0){
                                                                     return "Invalid withdraw amount";
                                                                    }
                                                                    else if(wamount>balance){
                                                                                             return "cannot withdraw beyond the current account balance";
                                                                                        }
               
                                                                     
               
                                                                                       else {
                                                                                            balance = balance -wamount;
               
                                                   
                                                                                            return balance;
                                                                                             }
                                                                                       };


   
   
  
                                        

