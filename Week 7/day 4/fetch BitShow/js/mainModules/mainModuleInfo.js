import DataModule from './../dataModule/dataModule.js';
import UIInfo from './../UImodules/UIModuleinfo.js'


const UI = new UIInfo();
const Data = new DataModule();


let href = window.location.search
console.log(href);
let splArray = href.split('=');
let id = splArray[1];
const startLiveSearch = () => {

    var val = UI.searchQuery()


    if (val != '') {
        $('.search').removeClass('display');
        Data.liveSearch(val).then((data) => {
            UI.renderLiveDataSearch(data)
        });
    } else {
        $('.search').addClass('display');
    }
}

Data.searchShow(id).then((data) => {
    UI.renderSingleSearchData(data)
});
Data.showSeasonsQuery(id).then((data) => {
    UI.renderSeasons(data)
});
Data.showCastQuery(id).then((data) => {
    UI.renderCast(data)
});
UI.renderMoreInfoLink(id);

UI.subscribeToSearch(startLiveSearch)