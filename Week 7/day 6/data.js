import { imgData } from './index.js'

export default class Data {
    querySearch(data, dataReturn) {
        let arrData = []

        if (data.tag.length == 1) {
            if (data.tag == ' ') {
                arrData = imgData.filter((element, index, imgData) => data.minHeight < parseInt(element.height) && data.minWidth < parseInt(element.width));
                // console.log('IF');

            } else {
                arrData = imgData.filter((element, index, imgData) => element.tags.toLowerCase() == data.tag &&
                    data.minHeight < parseInt(element.height) && data.minWidth < parseInt(element.width));


            }
        } else {
            let arrTag = data.tag.filter(element => element != ' ')

            for (let i in arrTag) {
                let array = imgData.filter((element, index, imgData) => {
                    return (arrTag[i] == element.tags &&
                        data.minHeight < parseInt(element.height) && data.minWidth < parseInt(element.width))
                })
                arrData = arrData.concat(array)


            };

        }

        dataReturn(arrData)
    }
}