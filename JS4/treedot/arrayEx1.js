let a = [10, 20, 30]
let b = []
for (let i = 0; i <= a.length - 1; i++) {
    b.push(a[i]);
}
a[1] = 25;
console.log(a);
console.log(b)