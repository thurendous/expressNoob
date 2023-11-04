const express = require('express')
const userRouter = require('./routes/user')

console.log(`node.js server is running on port 3000`)
const app = express()

const PORT = 3001

// app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', mylogger, (req, res) => {
  // console.log('GET / hello worlds!')
  // res.send('<h1>Hello World!!!</h1>')
  // res.status(500).json({ msg: 'error' })
  // res.sendStatus(404)
  res.render('index', { text: 'NodejsとExpress' })
})

// routing
app.use('/user', userRouter)
// use this when you want to create more endpoints
// app.use('/auth', authRouter)

function mylogger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.use(mylogger)
app.listen(PORT, () => console.log(`server is launched on port ${PORT}`))
