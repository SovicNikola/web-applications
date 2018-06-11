import UI from './ui.js'
import Data from './data.js'

let ui = new UI();
let data = new Data();

const dataReturn = (data) => {
    ui.renderImg(data)
}

const clickReg = () => {
    let val = ui.getInfoForSearch()
    data.querySearch(val, dataReturn)
}



ui.subscribeToClick(clickReg)