class Cargo {

    constructor(){
        this.isCargo = true
        this.details = {}
    }

    status(status){
        this.status = status
        return this
    }

    serial(serial){
        this.serial = serial
        return this
    }

    state(state){
        this.details.state = state
        return this
    }

    error(status){
        this.status = status
        throw({status})
    }

    original(original){
        this.details.original = original
        return this
    }

    payload(data = null){
        this.payload = data
        return this
    }

    msg(message = ''){
        this.details.message = message
        return this
    }

    loadmsg(key, message = ''){
        if(!this.details.messages) this.details.messages = []
        this.details.messages.push({key, message})
        return this
    }
}

module.exports = () => async (ctx, next) => {
    ctx.cargo = new Cargo()
    await next()
}