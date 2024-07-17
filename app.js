const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
// For deploying this app to a hosting solution (ex: Heroku), they will decide and assign the port to run the server (there's a port environment assigned by the hosting provider (we do that by updating process.env.PORT)

// routes
// const tourRouter = require('./routes/tourRoutes')
// const userRouter = require('./routes/userRoutes')


// Middlewares
// app.use(express.json())

// Routes
// app.use('/api/v1/tours', tourRouter)
// app.use('/api/v1/users', userRouter)
app.use(express.static("build")) // whenever any incoming requests comes in, see if the request is for a file that's in this "build" folder 

const items = [
    {
        name: "Testing1",
        price: 500
    },
    {
        name: "Testing2",
        price: 800
    },
]

app.get("/api/items", (req, res) => {
    res.send(items)
})

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side!')
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}...`))
