import DataModule from './../dataModule/dataModule.js';
import UIMoreInfo from './../UImodules/UIModuleMoreInfo.js'

let UI = new UIMoreInfo();
let Data = new DataModule();

let href = window.location.search
console.log(href);
let splArray = href.split('=');
let id = splArray[1];

const startLiveSearch = () => {

    let val = UI.searchQuery()


    if (val != '') {
        $('.search').removeClass('display');
        Data.liveSearch(val).then((data) => {
            UI.renderLiveDataSearch(data)
        });
    } else {
        $('.search').addClass('display');
    }
}

Data.showCrewQuery(id).then((data) => {
    UI.renderCrew(data)
});
Data.showAKASQuery(id).then((data) => {
    UI.renderAkas(data)
});
Data.showEpisodesQuery(id).then((data) => {
    UI.renderEpisodes(data)
})
Data.showTitleQuery(id).then((data) => {
    UI.renderTitle(data)
})