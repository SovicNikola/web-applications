import UIModule from "./UIModule.js";
import DataModule from "./dataModule.js";

$(document).ready(function() {
  $("#search").keydown(event => {
    if (event.keyCode == 13) {
      const data = new DataModule();
      const display = new UIModule();
      data.getData(display.displayUsers, display.getDataInput());
    }
  });
});
