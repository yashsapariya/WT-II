let n = 10
let sum = 0

for(i = 0; i <= n; i++)
{
    if(i%2==0)
    {
        sum = sum - i;
    }
    else{
        sum = sum + i
    }
}
console.log(sum)