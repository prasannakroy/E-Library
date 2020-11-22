const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
let  bookJSON  = require('../books.json')

const user = require('../models/User')

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  if (req.user) {
    return res.render('dashboard', {
      name: req.user.firstName,
    })
  }
  else{
    return res.render('dashboard', {
      name: false,
    })
  }
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  if (req.user) {
    return res.render('dashboard', {
      name: req.user.firstName,
    })
  }
  else{
    return res.render('dashboard', {
      name: false,
    })
  }
})

router.get('/genre', (req, res) => {
  const queryObj = req.query;
  let returnableBooks = {}
  Object.keys(bookJSON).map((key)=>{
    if(bookJSON[key].tags.includes(`${queryObj.type}`)){
      returnableBooks[key] = bookJSON[key];
    }
  })
  if (req.user) {
    res.render('genre', {
      books: returnableBooks,
      name: req.user.firstName,
      type: queryObj.type,
    })
  }
  else{
    res.render('genre', {
      books: returnableBooks,
      name: false,
      type: queryObj.type,
    })
  }
})

module.exports = router
