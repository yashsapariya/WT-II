const EventEmitter = require("events")
class myEmitter extends EventEmitter{}

const y = new myEmitter()

y.on("Video uploded",()=>{
    console.log("Notification received")
})

y.emit("Video uploded")
setInterval(()=>{
    console.log("Hellow")
},3000)