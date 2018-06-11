(function (UIModule, dataModule) {







    UIModule.subscribeToSearch(startLiveSearch); ///// subscribe to event on UI modul



    /*****************************search ******************************************/
    // $('#searchInput').on('keyup', function() {

    //     startLiveSearch();
    // })


    function startLiveSearch() {
        var val = UIModule.searchQuery()


        if (val != '') {
            $('.search').removeClass('display');
            dataModule.liveSearch(val, liveSearchHandler);
        } else {
            $('.search').addClass('display');
        }
    }


    UIModule.subscribeToClickOnImage(getImgData)
    // /**********************************second page ************************************/
    // $('#main').on('click', function (event) {
    //     getImgData(event);

    // })








    function dataHandler(data) {
        UIModule.displayData(data)
    }

    function liveSearchHandler(data) {
        UIModule.renderLiveDataSearch(data)

    }


    dataModule.GetAllShows(dataHandler);


})(UIModule, dataModule)