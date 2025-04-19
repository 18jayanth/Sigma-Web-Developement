In fs
fs.writeFileSync is a synchronous blocking code which means that
executing will be waiting till the file is created then remaining will be done
fs.writeFile is an asynchronous code it will allow below code to execute
if it takes time, it will take call back function as argument which 
will be return a message when file creation is done
