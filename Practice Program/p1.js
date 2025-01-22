// find maximum Number.

let a = [10, 5, 50, 100, 80]
let maxNumber = a[0];

for(i = 0; i <= a.length; i++)
{
    if (a[i] > maxNumber) {
        maxNumber = a[i];
    }
}
console.log("Maximum is:"+maxNumber);