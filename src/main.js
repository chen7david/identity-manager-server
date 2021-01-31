const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const { server } = require('config')


app.use(router.routes())

app.listen(4000, () => 
    console.log('server running at:', require('url').format(server))
)