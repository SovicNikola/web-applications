$(function () {
    navigate("home")
})


const navigate = (pageId) => {

    let page = $("#" + pageId).clone();

    renderPage(page)
}

const renderPage = (page) => {

    let div = $("#main");
    div.children().remove();

    div.append(page)

}
const createPageFromTemplate = () => {
    const array = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg']
    const arrObj = array.map((element, i, array) => {
        const model = {
            title: "My page",
            body: "Lorem ipsum",
            image: array[i]
        }

        return model // vraca map funkciji

    })
    // for (let i in array) {
    //     const model = {
    //         title: "My page",
    //         body: "Lorem ipsum",
    //         image: array[i]
    //     }
    //     arrObj.push(model)
    // }

    var page = renderViewForModel(arrObj);
    renderPage(page);
}

const renderViewForModel = (arrObj) => {
    // console.log(arrObj[2]);

    let allDivs = '';
    for (let i in arrObj) {
        allDivs += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${arrObj[i].image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arrObj[i].title}</h5>
            <p class="card-text">${arrObj[i].body}</p>
        </div>
    </div>`
    }
    const template = `

    <div class="container">
        <h1>I am from template </h1>
        ${allDivs}
     </div>`

    return $(template)

}



$('#homeLink').on('click', function () {

    navigate("home")
})

$('#aboutLink').on('click', function () {

    navigate("about")

})
$('#template').on('click', function () {


    createPageFromTemplate()

})