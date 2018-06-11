var UIModuleMoreInfo = (function () {

    var searchHandler;
    function subscribeToSearch(handler) {
        searchHandler = handler
    }



    $('#searchInput').on('keyup', function () {

        searchHandler();
    })




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

    function renderTitle(data) {
        $("#h3-title").text(data)
    }

    function renderCrew(data) {

        for (var i in data) {
            var urlBio = data[i].urlBio;
            var img = data[i].img;
            var imgUrl = data[i].imgUrl
            var role = data[i].role;
            var name = data[i].name
            var div = $('<div>');
            var link = $("<a>");
            link.attr('href', urlBio);
            var img = $('<img>');
            img.attr('src', imgUrl);
            img.addClass('imgCrew');
            link.append(img);
            div.append(link)
            var spanName = $('<span>').addClass('widthName');
            spanName.addClass('offset-2');
            spanName.attr('id', 'fullName');
            spanName.text(name);
            div.append(spanName);
            var spanRole = $("<span>").addClass('offset-3');
            spanRole.attr('id', 'role');
            spanRole.text(role);
            div.append(spanRole);
            $("#crew").append(div);
        }

    }

    function renderAkas(data) {

        for (var i in data) {
            var div = $("<div>");
            var span = $("<span>").addClass('offset-3');
            var spanName = $("<span>").addClass('offset-2');
            var country = data[i].country;
            var showName = data[i].showName
            var div = $("<div>");
            spanName.text(showName);
            var spanCountry = $("<span>").addClass('widthName');
            spanCountry.text(country);
            div.append(spanCountry);
            spanCountry.after(spanName);
            $('#akas').append(div)
        }
    }



    function renderEpisodes(data) {


        for (var i in data) {
            var epName = data[i].epName;
            var season = data[i].season;
            var epNUm = data[i].epNUm;
            var div = $("<div>");
            var spanEp = $("<span> Season " + season + " /episode " + epNUm + " : " + epName + '</span>');
            div.append(spanEp);
            $("#episodes").append(div)

        }

    }
    return {
        renderCrew: renderCrew,
        renderAkas: renderAkas,
        renderEpisodes: renderEpisodes,
        searchQuery: searchQuery,
        renderLiveDataSearch: renderLiveDataSearch,
        renderTitle: renderTitle,
        subscribeToSearch: subscribeToSearch
    }


})()