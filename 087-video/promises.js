import fs from 'fs/promises'
console.log('Block of code 1')
let a=await fs.writeFile('promises.txt','Jayanth is a good boy')
console.log(a)
console.log('Block of code 2')
let b=await fs.readFile('promises.txt')
console.log(b.toString())
console.log('Block of code 3')
let c=await fs.appendFile('promises.txt','Jayanth is a good boy')
console.log(c)
console.log('Block of code 4')
// Block of code 1
// undefined
// Block of code 2
// Jayanth is a good boy
// Block of code 3
// undefined
// Block of code 4