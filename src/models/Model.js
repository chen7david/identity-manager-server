const { development } = require('../../knexfile')
const knex = require('knex')(development)
const { Model } = require('objection')
Model.knex(knex)

class BaseModel extends Model {
    

}

module.exports = BaseModel