const axios = require("axios");
//const file = require("./loop.json");

exports.getWastes = async (req, res) => {
  const url = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=100";

  try {
    // get data from api
    const data = await axios.get(url);

    return data.data;
  } catch (error) {
    console.log(error);
    res.json("server error");
  }
};

// exports.Looping = (req, res) => {
//   try {
//     res.json(
//       file.hits.map((e) => {
//         return {
//           artist_names: e.result.artist_names,
//           image_url: e.result.song_art_image_url,
//           title: e.result.title,
//           release_date: e.result.release_date_for_display,
//           verified: e.result.primary_artist.is_verified,
//           lyrics: e.result.url,
//         };
//       })
//     );
//   } catch (error) {
//     console.log(error);
//     res.json("server error");
//   }
// };
