(function (UIModuleMoreInfo, dataModule) {

    // var id = localStorage.getItem('id');

    var href = window.location.search
    console.log(href);
    var splArray = href.split('=');
    var id = splArray[1];

    UIModuleMoreInfo.subscribeToSearch(startLiveSearch)


    function startLiveSearch() {
        var val = UIModuleMoreInfo.searchQuery()


        if (val != '') {
            $('.search').removeClass('display');
            dataModule.liveSearch(val, liveSearchHandler);
        } else {
            $('.search').addClass('display');
        }
    }

    function liveSearchHandler(data) {
        UIModuleMoreInfo.renderLiveDataSearch(data)

    }

    function crew(data) {
        UIModuleMoreInfo.renderCrew(data)

    }

    function akas(data) {


        UIModuleMoreInfo.renderAkas(data)
    }

    function episodes(data) {
        UIModuleMoreInfo.renderEpisodes(data)

    }

    function title(data) {
        UIModuleMoreInfo.renderTitle(data)
    }


    dataModule.queryMoreInfo(id, crew, akas, episodes, title);

})(UIModuleMoreInfo, dataModule)