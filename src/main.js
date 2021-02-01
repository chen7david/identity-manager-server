const Koa = require('koa')
const app = new Koa()
const cors = require('kcors')
const bodyparser = require('koa-bodyparser')
const router = require('./routes')
const { server } = require('config')
const { cargo, errors, mutator, logger } = require('cargo-io')

/* APP MIDDLEWARE */
app.use(cors())
app.use(cargo())
app.use(bodyparser())
app.use(errors(mutator()))
app.on('error', logger)

/* APP ROUTES */
Object.keys(router)
    .map(key => app.use(router[key].routes()))

app.listen(server.port, () => 
    console.log('server running at:', require('url').format(server))
)