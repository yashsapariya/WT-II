n = 6
flag = 0

for(let i = 1; i <= n; i++)
{
    if(n % i == 0)
    {
        flag++
    }
}
if(flag == 2)
{
    console.log("Number is prime")
}
else{
    console.log("Number is not prime")
}