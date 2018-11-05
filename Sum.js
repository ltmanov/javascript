let sum=0;
let array1 = [0,5,6,8];//positive num test = expect 14
let array2 = [-3,-6,-9,-20];//negative test = expect 0
let array3 = [56,-9,34,23,0,1];//mixed test = expect 90

function sumate(lev)
{
  for (var i = 0, sum = 0; i<lev.length; i++)
  {
    if ((lev[i]>0) && (lev[i]%2==0))
      {sum += lev[i];}else{}
  }
   return sum;
}
console.log(sumate(array1));
console.log(sumate(array2));
console.log(sumate(array3));
