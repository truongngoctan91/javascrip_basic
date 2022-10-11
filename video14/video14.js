console.log("Hello world from HTML")
// sum two numbers and print the results

let sum = (a,b, callback) => {
    let tong = a +b;
    // setTimeout(()=>{
    //     callback(tong);
    // }, 5000)
    let i =0;
    let timer = setInterval(()=>{
        callback(tong);
        i++;
        if (i===5) {
            clearInterval(timer);
            i =0;
        }
    }, 1000)

   
    
}
let printSum = (message) =>
{
    console.log("Check sum 6 + 9 =", message);
}


sum(6,9,printSum);