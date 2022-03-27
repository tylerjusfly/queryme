const express = require('express')
const { getWastes } = require('./waste.api')
const router = express.Router()
const _ = require('lodash')

router.get('/', async(req, res) => {
  let searchQuery = req.query.query
  let wastes = await getWastes();

  try {
    // Checking if query is not empty 
    if( !_.isEmpty(searchQuery)) {
      // Trim spaces and convert to lower case
      searchQuery = searchQuery.trim().toLowerCase();
      // filter
      let wastes = wastes.filter(
  
        /* Trim and covert waste.title || keywords || category to lowercase. 
        then check if it includes the searchQuery */
        waste => waste.title.trim().toLowerCase().includes(searchQuery) ||
        waste.keywords.trim().toLowerCase().includes(searchQuery) ||
        waste.category.trim().toLowerCase().includes(searchQuery)
      )
  
    }
    res.send(wastes)
    

  } catch (error) {
    console.log(error)
    res.send('server error')
  }



});

module.exports = router