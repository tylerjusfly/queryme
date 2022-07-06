const express = require("express");
const { getWastes, Looping } = require("./waste.api");
const router = express.Router();
const _ = require("lodash");
const axios = require("axios");

router.get("/", async (req, res) => {
  let searchQuery = req.body.search;
  let wastes = await getWastes();

  try {
    // Checking if query is not empty
    if (!_.isEmpty(searchQuery)) {
      // Trim spaces and convert to lower case
      searchQuery = searchQuery.trim().toLowerCase();
      // filter
      let was = wastes.filter(
        /* Trim and covert waste.title || keywords || category to lowercase. 
        then check if it includes the searchQuery */
        (waste) =>
          waste.title.trim().toLowerCase().includes(searchQuery) ||
          waste.keywords.trim().toLowerCase().includes(searchQuery) ||
          waste.category.trim().toLowerCase().includes(searchQuery)
      );
    }
    res.send(wastes);
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
});

router.get("/a", (req, res) => {
  const options = {
    method: "GET",
    url: "https://genius.p.rapidapi.com/search",
    params: { q: "Tupac shakur" },
    headers: {
      "X-RapidAPI-Key": "1e21171e7cmsh84a2ae759069572p150da6jsn797f6688d8dc",
      "X-RapidAPI-Host": "genius.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data.response);
    })
    .catch(function (error) {
      res.json(error);
    });
});

//router.get("/load", Looping);

module.exports = router;
