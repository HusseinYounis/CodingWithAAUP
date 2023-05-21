
function EvenOdds(n,k)
{
    var num = [];
    var sortedArray = [];

    // generate numbers from 1 to n
    for (let i = 0; i < n; i++) {
        num[i] = (i+1);
        
    }

    // push odd numbers into sortedArray

    for (let j = 0; j < num.length; j++) {
        if(num[j] % 2 !=0)
        {
            sortedArray.push(num[j]);
        }
        
    }

    // push even numbers into sortedArray
    for (let jj = 0; jj < num.length; jj++) {
        if(num[jj] % 2 ==0)
        {
            sortedArray.push(num[jj]);
        }
        
    }
    console.log(`number at index(${k}) = ${sortedArray[k-1]}`);

}


function en_EvenOdds(n,k)
{
    var midpoint;
    if(n % 2 == 0)
    {
        midpoint = n / 2;
    }
    else
    {
        midpoint = parseInt(n / 2) + 1;
    }

    console.log(`midpoint = ${midpoint}`);
    if( k > midpoint)
    {
        console.log(`number at index(${k}) = ${(k - midpoint ) * 2}`);
    }
    else
    {
        console.log(`number at index(${k}) = ${(2 * k) - 1}`);
    }


}

var k = 6;
var n = 1000000000;
var start = Date.now();
EvenOdds(n,k);
var timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");


var start = Date.now();
en_EvenOdds(n,k);
var timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");