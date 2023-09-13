const accountId = 144553
let accountEmail = "mansha@google.com"
var accountPassword = "12345"
accountCity = "Varanasi"

//accountId = 2 //not allowed
console.log(accountId);

accountEmail = "Ms@ms.com"
accountPassword = "212121"
accountCity = "Pune"
let accountState;

console.table([accountEmail , accountId , accountPassword , accountCity , accountState]);

/*
Prefer not to use var 
Because of issue in blockscope and functional scope
*/