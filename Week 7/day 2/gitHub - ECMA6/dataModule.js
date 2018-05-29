export default class DataModule {
  getData(displayUsers, dataInput) {
    // datainput je u stvari username
    let url = "https://api.github.com/search/users?q=" + dataInput;

    let request = $.ajax(url);
    request.done(function(data) {
      displayUsers(data);
    });
  }
}
