
//-------------------------------------------------------------------------SicoDice(Test)----------------------------------------------------------------------->>>> 




 
 const u1 = "https://sicodice.com/ajax/roll_dice_faucet.php" ;
 const u2 = "https://sicodice.com/ajax/main_balance.php" ;
 const u3 = "https://sicodice.com/ajax/switch_currency.php" ;
   let cl = [];
 
   let hdrs = {"accept": "application/json, text/javascript, */*; q=0.01", "content-type": "application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest","cookie": "PHPSESSID=0ff7a6b93d182712e8f56cd4885fc112;"};
      
   let data,h1;
 
 function dobet(){
	 
	    data = "bonus=1&house_edge=2&roller_game_number_hidden=49.00&bet_amount_hidden=0.00060000&pay_out_hidden=2&win_chance_hidden=49&roller_type=under&profit_hidden=0.000560";
        h1 = {body:data,credentials: undefined,headers:hdrs,method:"POST"};
       fetch(u1,h1)
            .then(data=>{return data.json()})
            .then(res=>{
				  //console.log(res);
				  console.log(`Blanace = ${res.balance}    Roll No. - ${res.roll}`);
				  dobet();
				})
            .catch(err=>{console.log(err)});
			
			
 }
			


 
 function balance1(){
	 
	     data = '';
       //data = 'faucet=1';
       //data = 'bonus=1';	   
       h1 = {body:data,credentials: undefined,headers:hdrs,method:"POST"};
      fetch(u2,h1)
            .then(data=>{return data.json()})
            .then(res=>{
				  console.log(res);
				 
				})
            .catch(err=>{console.log(err)});
			
			
    }
 
 function balance(){
 
         data = 'currency=USDT';
	   //data = 'currency=BNB&balance=++0.00000000&faucet=1';
	    //data = 'currency=USDT&faucet=1';
	    //data = 'currency=USDT&bonus=1';
    
       h1 = {body:data,credentials: undefined,headers:hdrs,method:"POST"};
      fetch(u3,h1)
            .then(data=>{return data.json()})
            .then(res=>{
				  console.log(res);
				 
				})
            .catch(err=>{console.log(err)});
			
			
    }
 
 function CoinList(str,startStr='id="info-user-',endStr='-wagered') {
		   let pos = str.indexOf(startStr) + startStr.length;
           cl.push(str.substring(pos, str.indexOf(endStr, pos)).toUpperCase());
		   str=str.slice(str.indexOf(endStr)+endStr.length);
		   //if(str.indexOf(endStr)>0)CoinList(str,startStr,endStr);
		   if(str.indexOf(endStr)>0)CoinList(str);
		   else {
			    console.log(cl);
				return cl;
		    }
        }
 
 
 function coinList(){
 
        data = 'user_id=james12343';
        h1 = {body:data,credentials: undefined,headers:hdrs,method:"POST"};
        fetch( "https://sicodice.com/ajax/user_profile_detail.php",h1)
                .then(data=>{return data.text()})
                .then(res=>{
				  //console.log(res);
				  CoinList(res);
				 
				})
                .catch(err=>{console.log(err)});
			
			
    }
 
  
 
			
//dobet();

 balance();
 
 coinList();
 
 



