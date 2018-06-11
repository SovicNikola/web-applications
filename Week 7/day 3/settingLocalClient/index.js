import uiMod from './uiIndex.js';
import dataMod from './dataBlog.js';
let ui = new uiMod();
let data = new dataMod();

data.queryBlog().then((data) => {
    ui.renderDataBlog(data)
})
