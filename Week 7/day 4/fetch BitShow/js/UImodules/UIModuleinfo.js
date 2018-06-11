export default class UIInfo {
    subscribeToSearch(handler) {
        $('#searchInput').on('keyup', function() {

            handler();
        })
    }
    searchQuery() {

        return $('input').val();

    }
    renderLiveDataSearch(data) {


        $("#searchDisplay").children().remove();
        for (var i in data) {
            var a = $('<a>').addClass('linkSearch');
            var id = data[i].id;
            a.attr('href', './ShowInfoPage.html?id=' + id);
            var title = data[i].name;
            a.text(title);
            $("#searchDisplay").append(a);

        }
    }

    renderSingleSearchData(data) {

        $('#singleTitle').text(data.name);
        var p = $(data.summary);
        $('#summary').append(p);
        var img = $("<img>").attr('src', data.img)
        img.addClass('col-7');
        $("#showInfo").prepend(img);

    }
    renderSeasons(data) {
        var li = '';
        var numOfSeasons = data.length;
        $("#seasons-header").text('Seasons (' + numOfSeasons + ')')
        for (var i in data) {

            var premiere = data[i].premiere;
            var end = data[i].end;

            if (premiere != null) {
                li += '<li>' + premiere + ' - ' + end + '</li>'
            } else {
                li += '<li>TBA</li>'
            }

        }
        $("#seasons").append(li)

    }
    renderCast(data) {

        var li = '';
        for (var i in data) {
            li += '<li>' + data[i].name + '</li>'

        }
        $("#cast").append(li)
    }
    renderMoreInfoLink(id) {
        var a = $("<a>").attr('href', './moreInfo.html?id=' + id);
        a.addClass('nav-link');
        a.text('More Info');
        console.log(a.text());

        $("#more-info-id").append(a)

    }

}