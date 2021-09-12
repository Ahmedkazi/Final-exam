function start(){ 
let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let internetbill = document.getElementById("internet bill").value;
let deviceMfees = document.getElementById("deviceMfees").value;
let internetbillYearly = internetbill * 12 ;
let monthllydeviceFees = deviceMfees/ 12 ; 
let totalyearlyFees = internetbillYearly + deviceMfees ;
let incentiveamount;
if (age>50 && totalyearlyFees> 20000 ){
 incentiveamount = 0.20 * internetbillYearly ;

}
else if ( age > 30 && monthllydeviceFees>= 250){
    incentiveamount = 0.15 * internetbillYearly ;
}

let msg = ` Dear ${name} your incentive amount is ${incentiveamount} `

  document.getElementById("msg").innerHTML= msg ;



}




















