(function (dataModule, UIModuleInfo) {
    // var id = localStorage.getItem('id')
    var href = window.location.search
    console.log(href);
    var splArray = href.split('=');
    var id = splArray[1];


    UIModuleInfo.subscribeToSearch(startLiveSearch)
    // /*****************************search ******************************************/
    // $('#searchInput').on('keyup', function() {

    //     startLiveSearch();
    // })


    function startLiveSearch() {
        var val = UIModuleInfo.searchQuery()


        if (val != '') {
            $('.search').removeClass('display');
            dataModule.liveSearch(val, liveSearchHandler);
        } else {
            $('.search').addClass('display');
        }
    }

    function liveSearchHandler(data) {
        UIModuleInfo.renderLiveDataSearch(data)

    }

    function renderShowNameImgDetails(showName, showImgUrl, showSummary) {

        UIModuleInfo.renderSingleSearchData(showName, showImgUrl, showSummary)
    }

    function showSeasons(data) {

        UIModuleInfo.renderSeasons(data)

    }

    function showCast(data) {
        UIModuleInfo.renderCast(data)

    }

    dataModule.searchShow(id, renderShowNameImgDetails);
    dataModule.showSeasonsQuery(id, showSeasons);
    dataModule.showCastQuery(id, showCast);
    UIModuleInfo.renderMoreInfoLink(id)


})(dataModule, UIModuleInfo)