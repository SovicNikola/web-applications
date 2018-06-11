var UIModule = (function () {

    // var UISelectors = {
    //     searchField: "#searchInput", //ovo na me treba ovde?
    //     searchButton: '#button'
    // }

    // var searchHandler;
    // function subscribeToSearch(handler) {
    //     searchHandler = handler
    // }



    // $('#searchInput').on('keyup', function () {

    //     searchHandler();
    // })

    // var clickHandler;
    // function subscribeToClickOnImage(handler) {
    //     clickHandler = handler
    // }
    // $('#main').on('click', function (event) {
    //     clickHandler(event);

    // })



    // function displayData(data) {

    //     for (var i in data) {
    //         var imgUrl = data[i].image.medium;
    //         var title = data[i].name;
    //         var showId = data[i].id;
    //         var divCard = $('<div>').addClass('card');
    //         var a = $("<a>").attr('href', './ShowInfoPage.html?id=' + showId);

    //         var newImg = $('<img src="' + imgUrl + '">').addClass('card-img-top');

    //         $(a).append(newImg);
    //         $(divCard).append(a);

    //         var cardBody = $('<div>');
    //         $(cardBody).addClass('card-body');
    //         var paragraphTitle = $('<p>').addClass('card-text');
    //         paragraphTitle.text(title);
    //         $(cardBody).prepend(paragraphTitle);
    //         $(a).append(cardBody);

    //         $('#main').append(divCard);
    //     }
    // }


    function searchQuery() {

        return $('input').val();

    }


    function renderLiveDataSearch(data) {


        $("#searchDisplay").children().remove(); // sklanjamo svu decu sa tog diva pa pravimo novu listu
        for (var i in data) {
            var a = $('<a>').addClass('linkSearch');
            var id = data[i].id;
            a.attr('href', './ShowInfoPage.html?id=' + id);
            var title = data[i].title;
            a.text(title);
            $("#searchDisplay").prepend(a);

        }
    }



    function getImgId(event) {

        return event.target.id
    }


    return {
        UISelectors: UISelectors,
        displayData: displayData,
        searchQuery: searchQuery,
        renderLiveDataSearch: renderLiveDataSearch,
        getImgId: getImgId,
        subscribeToSearch: subscribeToSearch,
        subscribeToClickOnImage: subscribeToClickOnImage

    }
})();