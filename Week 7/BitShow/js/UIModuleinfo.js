var UIModuleInfo = (function () {

    var searchHandler;
    function subscribeToSearch(handler) {
        searchHandler = handler
    }



    $('#searchInput').on('keyup', function () {

        searchHandler();
    })





    function renderSingleSearchData(name, img, sum) {

        $('#singleTitle').text(name);
        var p = $(sum);
        $('#summary').append(p);
        var img = $("<img>").attr('src', img)
        img.addClass('col-7');
        $("#showInfo").prepend(img);

    }


    function renderSeasons(data) {
        var li = '';
        var numOfSeasons = data.length;
        $("#seasons-header").text('Seasons (' + numOfSeasons + ')')
        for (var i in data) {

            var premiere = data[i].premiereDate;
            var end = data[i].endDate;

            if (premiere != null) {
                li += '<li>' + premiere + ' - ' + end + '</li>'
            } else {
                li += '<li>TBA</li>'
            }

        }
        $("#seasons").append(li)

    }

    function renderCast(data) {

        var li = '';
        for (var i = 0; i < data.length; i++) {
            li += '<li>' + data[i].name + '</li>'

        }
        $("#cast").append(li)
    }

    function renderMoreInfoLink(id) {
        var a = $("<a>").attr('href', './moreInfo.html?id=' + id);
        a.addClass('nav-link');
        a.text('More Info');


        $("#more-info-id").append(a)

    }

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

    return {
        renderSingleSearchData: renderSingleSearchData,
        renderSeasons: renderSeasons,
        renderCast: renderCast,
        renderMoreInfoLink: renderMoreInfoLink,
        searchQuery: searchQuery,
        renderLiveDataSearch: renderLiveDataSearch,
        subscribeToSearch: subscribeToSearch

    }
})();