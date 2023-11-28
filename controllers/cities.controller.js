const controller = {}

const cities = [
    {
        "id": 1,
        "name": "New York City",
        "description": "The one with that big park.",
        "population": 8468000000
    },
    {
        "id": 2,
        "name": "Antwerp",
        "description": "The one with the cathedral that was never really finished.",
        "population": 506922
    },
    {
        "id": 3,
        "name": "Paris",
        "description": "The one with that big tower.",
        "population": 2161000000
    }
]

controller.getCities = (req, res) => {
    res.send(cities)
}

controller.getCityById = (req, res) => {
    const city = cities.find(city => city.id === parseInt(req.params.id))
    if (!city) res.status(404).send('The city with the given ID was not found.')
    res.send(city)
}

module.exports = controller