function checkCashRegister(price, cash, cid) {
      
    let change = cash - price;
    let totalCid = 0;
    let changes = [];

    const currency = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    for (let i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
    }
    totalCid = Math.round(totalCid * 100) / 100;




      if(totalCid < change){
        
        return { status: "INSUFFICIENT_FUNDS", change: [] };

      }else if (totalCid === change){
        
        return { status: "CLOSED", change: cid };
      }else{
         for (let i = currency.length-1; i >= 0; i--) {
            let currencyValue = currency[i][1];
            let currencyName = currency[i][0];

            let availableAmount = cid[i][1];

            if(change >= currencyValue && availableAmount > 0){
                let count = Math.min(Math.floor(change / currencyValue), availableAmount / currencyValue);
                let amount = count * currencyValue;
                change -= amount;
                change = Math.round(change * 100) / 100; 
                changes.push([currencyName, amount]);

            }
            
            
         }
          

         if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
            return { status: "OPEN", change: change };
        }
        
      }



     

  }
  


  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])