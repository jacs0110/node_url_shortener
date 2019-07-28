// node packages
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const session = require('express-session')
const port = 3000

// include static files
app.use(express.static('public'))

// db
const db = require('./models')

// set up the app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(flash())

// use express session
app.use(session({
  secret: 'akpitd',
  resave: 'false',
  saveUninitialized: 'false'
}))

// locals
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// routes
app.use('/', require('./routes/home.js'))

// listen to the express app
app.listen(port, () => {
  console.log(`Listening to express app...`)
})