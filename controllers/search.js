const axios = require('axios');
const Promise = require('promise');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const NearestLocation = require('../utils/geolocation');



const searchLocationFromNaver = async (req,res,next) => {
  try{
    const {searchText} = req.body;
    if(!searchText) throw new Error('ther is no searchText')
    const option1 = {
        method:"GET",
        headers:{
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-NCP-APIGW-API-KEY-ID":"n4vss9n2ob",
          "X-NCP-APIGW-API-KEY":"ZbxiAi6YdEHckmkylx9Mo6iB4bFXSOALmxTlQDNs"
        }
      }
      const option2 = {
        method:"GET",
        headers:{
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-NCP-APIGW-API-KEY-ID":"n4vss9n2ob",
          "X-NCP-APIGW-API-KEY":"ZbxiAi6YdEHckmkylx9Mo6iB4bFXSOALmxTlQDNs"
        }
      }
      const results = await Promise.all([fetch(`https://naveropenapi.apigw.ntruss.com/map-place/v1/search?query=${searchText}&coordinate=127.1054328,37.3595963`, option1).then(value => value.json()), fetch('https://s3.ap-northeast-2.amazonaws.com/misemise-fine-dust-data/current-data/map-data/data.json', option2).then(value => value.json())])
      const [firstData, miseData] = results;
      const {data} = miseData
      const {places} = firstData;
      if(places.length > 0){
        const finalResults = places.map(value => {
          const renderInNaver = NearestLocation(value['y'], value['x'] ,Object.values(data))
          return {
            ...value,
            renderInNaver
          }
        })
        res.send(finalResults)
      }
      else{
        throw new Error('was not able to fetch data')
      }
  }
  catch(err){
    res.send({
      statusCode:404,
      message:"not found"
    })
  }
}


module.exports = {
  searchLocationFromNaver
}
