export default class UIMoreInfo {
    searchQuery() {

        return $('input').val();

    }
    subscribeToSearch(handler) {

        $('#searchInput').on('keyup', function() {

            handler();
        })
    }
    renderLiveDataSearch(data) {

        $("#searchDisplay").children().remove();
        for (let i in data) {
            let a = $('<a>').addClass('linkSearch');
            let id = data[i].id;
            a.attr('href', './ShowInfoPage.html?id=' + id);
            let title = data[i].title;
            a.text(title);
            $("#searchDisplay").prepend(a);

        }
    }
    renderTitle(data) {
        $("#h3-title").text(data)
    }
    renderCrew(data) {

        for (let i in data) {
            let urlBio = data[i].bio;
            let imgUrl = data[i].imgUrl;
            // console.log(imgUrl);

            let role = data[i].role;
            let name = data[i].name
            let div = $('<div>');
            let link = $("<a>");
            link.attr('href', urlBio);
            let img = $('<img>');
            img.attr('src', imgUrl);
            img.addClass('imgCrew');
            link.append(img);
            div.append(link)
            let spanName = $('<span>').addClass('widthName');
            spanName.addClass('offset-2');
            spanName.attr('id', 'fullName');
            spanName.text(name);
            div.append(spanName);
            let spanRole = $("<span>").addClass('offset-3');
            spanRole.attr('id', 'role');
            spanRole.text(role);
            div.append(spanRole);
            $("#crew").append(div);
        }

    }
    renderAkas(data) {

        for (let i in data) {
            let div = $("<div>");
            let span = $("<span>").addClass('offset-3');
            let spanName = $("<span>").addClass('offset-2');
            let country = data[i].country;
            let showName = data[i].name
            spanName.text(showName);
            let spanCountry = $("<span>").addClass('widthName');
            spanCountry.text(country);
            div.append(spanCountry);
            spanCountry.after(spanName);
            $('#akas').append(div)
        }
    }
    renderEpisodes(data) {


        for (let i in data) {
            let epName = data[i].name;
            let season = data[i].season;
            let epNUm = data[i].num;
            let div = $("<div>");
            let spanEp = $("<span> Season " + season + " /episode " + epNUm + " : " + epName + '</span>');
            div.append(spanEp);
            $("#episodes").append(div)

        }

    }

}