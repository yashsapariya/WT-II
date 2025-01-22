n = 15
sum = 0

for(i = 0; i < n; i++)
{
    if(n % i == 0)
    {
        sum = sum + i
    }
}
if(sum == n)
{
    console.log("perfect")
}
else{
    console.log("Not perfact")
}