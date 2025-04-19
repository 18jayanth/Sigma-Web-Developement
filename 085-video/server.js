console.log('hello world')
//node js is used to run js in backend
//we should initalize project with npm so that we can install many packages
// in node modules packages which are 

//sluggify will convert a string into url accepted language
var slugify = require('slugify')

let a=slugify('some string1234') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b=slugify('some string1453!@#$', '@')  // some_string
console.log(b)
