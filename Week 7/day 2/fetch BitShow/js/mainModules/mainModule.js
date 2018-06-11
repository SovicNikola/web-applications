import DataMod from './../dataModule/dataModule.js'
import UIMod from './../UImodules/UIModule.js'

const UI = new UIMod();
const data = new DataMod();
const startLiveSearch = () => {
    let val = UI.searchQuery()

    if (val != '') {
        $('.search').removeClass('display');
        data.liveSearch(val).then((data) => { UI.renderLiveDataSearch(data) });
    } else {
        $('.search').addClass('display');
    }
}

data.getAllShows().then((data) => { UI.displayData(data) })
UI.subscribeToSearch(startLiveSearch)