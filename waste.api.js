const axios = require('axios');

exports.getWastes = async(req, res) => {
  const url = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=100';

  try {
    // get data from api
    const data = await axios.get(url);
  
    return data.data;
    
  } catch (error) {
    console.log(error)
    res.json('server error')
  }

}