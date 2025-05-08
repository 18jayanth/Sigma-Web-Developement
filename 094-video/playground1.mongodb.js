
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany(
  [
    {
        "course": "JavaScript",
        "name": "Jayanth",
        "fees": 20000
    },
    {
        "course": "Python",
        "name": "Ravi",
        "fees": 15000
    },
    {
        "course": "Django",
        "name": "Neha",
        "fees": 18000
    },
    {
        "course": "React",
        "name": "Ankit",
        "fees": 22000
    },
    {
        "course": "Node.js",
        "name": "Megha",
        "fees": 21000
    },
    {
        "course": "Angular",
        "name": "Sahil",
        "fees": 25000
    },
    {
        "course": "Vue.js",
        "name": "Priya",
        "fees": 23000
    },
    {
        "course": "Swift",
        "name": "Akash",
        "fees": 30000
    },
    {
        "course": "Go",
        "name": "Deepak",
        "fees": 17000
    },
    {
        "course": "Flutter",
        "name": "Sneha",
        "fees": 28000
    }
]

  
);

// Run a find command to view items sold on April 4th, 2014.


// Print a message to the output window.
console.log(`Done Inserting Data`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
