export default class UI {
    renderDataBlog(data) {
        for (let i in data) {

            let id = data[i].id;
            let title = data[i].title;
            let desc = data[i].description

            let divCard = $("<div>").addClass('card blue-grey darken-1');
            let divCont = $("<div>").addClass("card-content white-text");
            let span = $('<span>').attr('id', 'textToCenter');
            span.text(title);
            let p = $('<p>');
            p.text(desc);
            divCont.append(span);
            divCont.append(p);
            divCard.append(divCont);
            $('#main').append(divCard);
            // $(".card").append(br)

        }

    }
}