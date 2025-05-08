//CRUD OPERATIONS   
use("crudDB") //Database created
//switched to crudDB database
console.log(db)
//collection is created
db.createCollection("courses")

//1)CREATE
/*
db.courses.insertOne(
    {
        name:"Jayanth Web Dev Course",
        price:0,
        assignments:12,
        projects:45
    }
)
db.courses.insertMany([
    
        {
            "name": "Jayanth Web Dev Course",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Python for Beginners",
            "price": 5000,
            "assignments": 10,
            "projects": 30
        },
        {
            "name": "Django Full Stack",
            "price": 7000,
            "assignments": 15,
            "projects": 20
        },
        {
            "name": "React Mastery Course",
            "price": 8000,
            "assignments": 20,
            "projects": 25
        },
        {
            "name": "Node.js Advanced",
            "price": 6000,
            "assignments": 10,
            "projects": 15
        },
        {
            "name": "Angular Basics",
            "price": 7500,
            "assignments": 18,
            "projects": 12
        },
        {
            "name": "Vue.js Intermediate",
            "price": 5500,
            "assignments": 12,
            "projects": 22
        },
        {
            "name": "Swift Programming",
            "price": 10000,
            "assignments": 25,
            "projects": 35
        },
        {
            "name": "Go Programming Basics",
            "price": 4500,
            "assignments": 8,
            "projects": 10
        },
        {
            "name": "Flutter Mobile Development",
            "price": 12000,
            "assignments": 20,
            "projects": 50
        }
    
    
])

//2.READ

//finding course with courses price 0
//console.log("To find course with price 0")
//let a=db.courses.find({price:0})
//console.log(a)


//to find no of records with price 0
//console.log(a.count()) 

//to  display in form of arrays
//console.log("To display in form of array")
//console.log(a.toArray())

//to find the first value with price 0
//console.log("To Find One")
//let b=db.courses.findOne({price:0})
//console.log(b)

*/
//3.UPDATE
//it only updates first 0 to 100
//db.courses.updateOne({price:0},
  //  {$set:{price:100}})
  //it updates all 0 to 100

  //db.courses.updateMany({price:0},
     // {$set:{price:100}})

//4)Delete
//db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})

