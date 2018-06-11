let numOfIMg;

export default class UI {
    subscribeToClick(handler) {

        $('#button').on('click', function () {
            handler()
        })
    }

    getInfoForSearch() {
        let objInfo = {};
        objInfo.tag = $('#tag').val();
        // console.log(objInfo.tag);

        objInfo.minHeight = $('#height').val();
        objInfo.minWidth = $('#width').val()
        numOfIMg = $('#number').val()
        return objInfo
    }

    renderImg(data) {
        let col = parseInt(12 / numOfIMg);
        // console.log(data);
        $("#root").children().remove()

        for (let i in data) {
            let divCard = $("<div>").addClass('card col-' + col);
            let img = $('<img>').attr('src', data[i].src);
            img.addClass('card-img-top');
            img.attr('width', data[i].width);
            img.attr('hight', data[i].hight);
            divCard.append(img);
            $('#root').append(divCard)

        }
    }
}