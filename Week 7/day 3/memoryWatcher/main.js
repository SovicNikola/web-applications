const msg = require('./message.js')
const memory = require("./memoryInfo.js")

const alert = () => {
    console.log(msg());
}
memory.start()
memory.registerForAlert(alert);