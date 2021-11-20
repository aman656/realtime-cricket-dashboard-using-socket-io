import mongoose from 'mongoose'

const scoreOrder = mongoose.Schema({
    score:String,
    wicket:String,
    over:String,

})

const liveScore = mongoose.model("score",scoreOrder)

module.exports = liveScore