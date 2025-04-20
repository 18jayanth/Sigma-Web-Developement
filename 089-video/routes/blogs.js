//express router is used to have a sepearate folder for specific routes
//whenever user hits blogs it will come to this route
//so it is useful in routes seperaration thus increases code readibility

const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})
router.get('/blogs/:slug', (req, res) => {
    res.send(`About blogs in ${req.params.slug}`)
  })

module.exports = router