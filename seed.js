

import cryptoJS from "crypto-js";
import crypto from "crypto";

const verify = (server_seed, client_seed, nonce) => { 
    const hash = cryptoJS.HmacSHA256(server_seed,`${client_seed}_${nonce}`).toString();
    const hash1 = crypto.createHmac('sha256',`${client_seed}_${nonce}`).update(server_seed).digest("hex");
    console.log(hash);
    console.log(hash1);	
    let index = 0;	
    let lucky = parseInt(hash.substr(index,5), 16);console.log(lucky);
    while (lucky >= 1000000) { 
        lucky = parseInt(hash.substr(index, 5), 16); index += 5; 
	 }
	console.log(lucky);   
	console.log((lucky%10000/100).toFixed(2));
  return (lucky % 10000 / 100).toFixed(2); 
} 


let server = "511c5597e62322ed0bb161c1858bdf5a82bcfea595d7767912f87f3108819cd1",

    client = "544a6fecf7c91692527079045df5663f",

    nonce  =  317334 ;


verify(server,client,nonce);


