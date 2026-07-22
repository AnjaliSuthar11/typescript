let subs:number | string = '1M'

let apiRequestStatus : 'pending' | 'sucess' | 'error' = "pending"


apiRequestStatus="sucess"

let airlineSeat :'aisle' | 'window ' | 'middle' ='aisle'

airlineSeat='aisle'

const orders = ['12','14',40];

let currentorder: string | undefined;

for (let order of orders){
    if(order === "2"){
        currentorder = order;
        break;
    }
    currentorder = '11';
}

console.log(currentorder)