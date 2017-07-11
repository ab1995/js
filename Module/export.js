function BankAcc(){
	this.accName = "Gaurav";
	var accBalance = 1000;
	var accNo = 123;
	
	function withdraw(amt){accBalance-=amt;}
	function deposit(amt) {accBalance+=amt;}
	function getAccBal(){ return accBalance;}
	function getAccNo(){ return accNo;}
	
	return{
		withdraw:withdraw,
		deposit:deposit,
		getAccBal:getAccBal,
		getAccNo:getAccNo
	}
};
var obj=new BankAcc();
document.write(obj.getAccBal());