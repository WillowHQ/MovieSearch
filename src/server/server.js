const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//ok so let's make a route that will push a new movie onto the movie array 
const storage = require('node-persist')

storage.initSync()

//express endpoint to store list of movies

//let's write something to the file 

let movies = []
let movie = {}
movie.title = "The Shinning"
movie.actors = "Jack Nicholson"
movie.date = "1984"

movies[0] = movie

storage.setItemSync('movies', movies)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})

app.post('/api/addMovie', function(req, res) {
	if(!req.body) return res.sendStatus(400)
	console.log(req.body)
	
	//res.json(movie);	
	//res.send(req.body);
	//ok so I need to add a movie 
	//get an array and push the new movie onto it
	let movies = []

	movies = storage.getItemSync('movies')
	let newMovie = {}
	newMovie.title = req.body.title
	newMovie.actors = req.body.actors
	newMovie.date = req.body.date
	movies.push(newMovie)
	storage.setItemSync('movies', movies)
	console.log(storage.getItemSync('movies'))

})
app.get('/api/getMovies', function(req, res) {
	res.send(storage.getItemSync('movies'))

})


app.listen(8000)
console.log("listening on port 8000")



