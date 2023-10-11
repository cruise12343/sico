const axios = require('axios');
let coin = "trx";
function balance(cn){
	        
	        let	obj1 = [{operationName:"UserBalances",variables:{},query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}],
		    b1 = JSON.stringify(obj1);
			const API_KEY="216bde87b4863f89937b3272f63742fb37d08a6a4b6833504791cff4ceec0630c03a4563ac8498d9b61357ce128ab699";
            const u1 = "https://stake.com/_api/graphql" ;
			const limitPrecision = (n,p) => (0|n*10**p)/10**p ;
            let coin = cn,
            hdrs = {"accept": "*/*", "content-type": "application/json", "x-access-token": API_KEY , "x-language": "en","x-lockdown-token":"s5MNWtjTM5TvCMkAzxov" };
            //hdrs = {"accept": "*/*", "content-type": "application/json", "x-access-token": API_KEY };
			
	        h1= {body:b1,credentials: undefined,headers:hdrs,method:"POST"};	
		
		fetch(u1,h1)
            .then(data=>{return data.json()})
            .then(res=>{
				//console.log(res);
				//console.log(res[0].data.user.balances);
				let e = res[0].data.user.balances;
				for(let i in e){
                      if (e[i].available.currency == coin){
                         console.log(e[i].available.amount);
                         console.log(limitPrecision(e[i].available.amount,8));
						 console.log(e[i].available.amount.toFixed(8));
						 console.log(Math.trunc(e[i].available.amount));
                         }
                    }
				
				
				})
            .catch(err=>{console.log(err)});
			
    }		
	
 //balance(coin);
 
 async function balance1(cn){
	        
	        let	obj1 = [{operationName:"UserBalances",variables:{},query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}],
		    b1 = JSON.stringify(obj1);
			const API_KEY="216bde87b4863f89937b3272f63742fb37d08a6a4b6833504791cff4ceec0630c03a4563ac8498d9b61357ce128ab699";
            const u1 = "https://stake.com/_api/graphql" ;
			const limitPrecision = (n,p) => (0|n*10**p)/10**p ;
            let coin = cn,
            hdrs = {"accept": "*/*", "content-type": "application/json", "x-access-token": API_KEY , "x-language": "en","x-lockdown-token":"s5MNWtjTM5TvCMkAzxov","user-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"};
            //hdrs = {"accept": "*/*", "content-type": "application/json", "x-access-token": API_KEY };
			
	        h1= {body:b1,credentials: undefined,headers:hdrs,method:"POST"};	
		
		    let res = await axios.post(u1,obj1,{headers:hdrs});
            console.log(res.data);
            
    }		
	
	
	
	//balance1(coin);
	
	

async function ax(){
        const u1 = "https://sicodice.com/ajax/roll_dice_faucet.php" ;
 
        let hdrs = {"accept": "application/json, text/javascript, */*; q=0.01", "content-type": "application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest","cookie": "PHPSESSID=0ff7a6b93d182712e8f56cd4885fc112;"};
             
        let data = "bonus=1&house_edge=2&roller_game_number_hidden=49.00&bet_amount_hidden=0.00060000&pay_out_hidden=2&win_chance_hidden=49&roller_type=under&profit_hidden=0.000560";

        let h1 = {body:data,credentials: undefined,headers:hdrs,method:"POST"};
 
        let res = await axios.post(u1,data,{headers:hdrs});
          		  
	    console.log(res.data);
	   
    }
            
 ax();
 
 //