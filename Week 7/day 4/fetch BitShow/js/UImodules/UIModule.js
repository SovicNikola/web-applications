let UISelectors = {
    searchField: "#searchInput", //ovo na me treba ovde?
    searchButton: '#button'
}
export default class UIModule {
    subscribeToSearch(handler) {

        $('#searchInput').on('keyup', function() {

            handler();
        })
    }
    subscribeToClickOnImage(handler) {

        $('#main').on('click', function() {
            handler();

        })
    }
    displayData(data) {
        console.log(data);

        for (let i in data) {
            let imgUrl = data[i].imgUrl;
            let title = data[i].title;
            let showId = data[i].id;
            let divCard = $('<div>').addClass('card');
            let a = $("<a>").attr('href', './ShowInfoPage.html?id=' + showId);

            let newImg = $('<img src="' + imgUrl + '">').addClass('card-img-top');

            $(a).append(newImg);
            $(divCard).append(a);

            let cardBody = $('<div>');
            $(cardBody).addClass('card-body');
            let paragraphTitle = $('<p>').addClass('card-text');
            paragraphTitle.text(title);
            $(cardBody).prepend(paragraphTitle);
            $(a).append(cardBody);

            $('#main').append(divCard);
        }
    }
    searchQuery() {

        return $('input').val();

    }

    renderLiveDataSearch(data) {

        console.log(data);

        $("#searchDisplay").children().remove();
        for (let i in data) {
            let a = $('<a>').addClass('linkSearch');
            let id = data[i].id;
            a.attr('href', './ShowInfoPage.html?id=' + id);
            let title = data[i].name;
            a.text(title);
            $("#searchDisplay").append(a);

        }
    }

    getImgId(event) {

        return event.target.id
    }


}