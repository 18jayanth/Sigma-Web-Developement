import path from "path"
console.log(path)
let mypath="D:\\Sigma Web Developement\\Sigma_WebDevelopement\\video87\\jayanth1.txt"
//path can be used to find extension of ur file
console.log(path.extname(mypath))//.txt
console.log(path.dirname(mypath))
//D:\Sigma Web Developement\Sigma_WebDevelopement\video87 it will give directory name
console.log(path.basename(mypath))//jayanth1.txt it will give file name
console.log(path.join('C:/','programs\\jayanth1.txt'))
//C:\programs\jayanth1.txt it will join two paths