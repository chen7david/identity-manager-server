const router = require('koa-router')()
const Joi = require('joi')
const { validateBody } = require('cargo-io')

const login = Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

router.get('/', validateBody(login), async (ctx) => {
    ctx.body = 'hello'
})

module.exports = router