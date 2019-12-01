import yelp from '../../services/yelp.js'

export default async (req, res) => {
  try {
    const yelpResponse = await yelp.search({
      term: req.query.text,
      location: 'san francisco, ca',
      limit: 5,
    })

    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(yelpResponse.jsonBody.businesses))
  } catch (e) {
    console.log(e)
  }
}
