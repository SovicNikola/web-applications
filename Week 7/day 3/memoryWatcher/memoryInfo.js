const os = require('os');

let handlerFunction = [];

const memoryCheck = () => {
    let freeMB = os.freemem() / 1e+6;
    console.log(freeMB);

    if (freeMB < 2000) {
        for (let i in handlerFunction) {
            handlerFunction[i]()

        }
    }
}


const start = () => {
    setInterval(memoryCheck, 1000);
}

const registerForAlert = (handler) => {

    handlerFunction.push(handler);
}

module.exports = { registerForAlert, start }