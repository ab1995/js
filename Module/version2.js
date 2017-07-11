function BankAcc(){
	this.accName = "Gaurav";
	var accBalance = 1000;
	var accNo = 123;
	
	return{
		withdraw : function(amt){accBalance-=amt;},
		deposit : function(amt){accBalance+=amt;},
		getAccBal : function(){ return accBalance;},
		getAccNo : function(){ return accNo;}	
	
	}
};
var obj=new BankAcc();
document.write(obj.getAccBal());