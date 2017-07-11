function BankAcc(){
	this.accName = "Gaurav";
	var accBalance = 1000;
	var accNo = 123;
	
	
		this.withdraw = function(amt){accBalance-=amt;};
		this.deposit = function(amt){accBalance+=amt;};
		this.getAccBal = function(){ return accBalance;};
		this.getAccNo = function(){ return accNo;};
	
	
};
var obj=new BankAcc();
document.write(obj.getAccBal());