var BankAcc={};

var obj={
	accName: "Gaurav",
	accBalance: 1000,
	accNo: 123,
	
	withdraw : function(){},
	deposit : function(){},
	getAccBal : function(){ return this.accBalance;},
	getAccNo : function(){ return this.accNo;}	
};

document.write(obj.getAccNo());