import fs from "fs"
import { stringify } from "querystring"
console.log(fs)
console.log('starting')
//fs.writeFileSync('jayanth1.txt','hello world')
fs.writeFile('jayanth1.txt','hai world',()=>
{
    console.log('File Creation done')
    fs.readFile('jayanth1.txt',(error,data)=>
    {
        //console.log(error,data) it will return null and buffer so to read data 
        console.log(error,data.toString())//null hai world
    })
    fs.appendFile('append.txt','jayanth',(error,data)=>
    {
console.log(data)
    })
})
console.log('ending')