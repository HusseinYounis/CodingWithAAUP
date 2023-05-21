function getCombinations(valuesArray)
{

var combi = [];
var temp = [];
var slent = Math.pow(2, valuesArray.length);

for (var i = 0; i < slent; i++)
{
    temp = [];
    for (var j = 0; j < valuesArray.length; j++)
    {
        if ((i & Math.pow(2, j)))
        {
            temp.push(valuesArray[j]);
        }
    }
    if (temp.length > 0)
    {
        combi.push(temp);
    }
}

combi.sort((a, b) => a.length - b.length);
return combi;
}

function f(n){
  let i = 0;
  do if(n&1) ++i; while(n>>=1)
  return i;
}

var k = 1;
var aaray =['1', '1', '1','1']; 
var result = getCombinations(['5', '5', '7','4','2']);

var number_of_k = 0;
result.forEach(element => {

  if(element.length == 1)
  {
    console.log(element+ " ---> ones = " + f(parseInt(element)));
    if(f(parseInt(element)) == k) number_of_k++;
  }
  else
  {
    var and_result = parseInt(element[0]);
    element.forEach(element_ => {

      and_result &= parseInt(element_);
    });

    console.log(element+ " ---> ones = " + f(and_result));
    if(f(and_result) == k) number_of_k++;
  }
  
});
console.log(`count [${k}]  ---> ${number_of_k} `);