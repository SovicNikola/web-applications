export default class UIModule {
  getDataInput() {
    const DataInput = $("#search").val();
    return DataInput;
  }

  displayUsers(data) {
    console.log(data);

    const article = $("<article>");
    for (let i = 0; i < data.items.length; i++) {
      const div = $("<div>");
      const img = $("<img>").attr("src", data.items[i].avatar_url);
      const ime = $("<p>" + data.items[i].login + "</p>");
      div.append(img);
      div.append(ime);
      article.append(div);
    }
    $("body").append(article);
  }
}
