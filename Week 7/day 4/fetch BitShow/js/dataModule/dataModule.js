import { url } from './../url/url.js';
import ShowItem from './../entites/showItemToDisplay.js';
import ShowSearchItem from './../entites/showItemForSearch.js';
import ShowSPItem from './../entites/ShowSecondPageItem.js';
import ShowSeasons from './../entites/showSeasons.js';
import ShowCast from './../entites/showCast.js';
import ShowCrewItem from './../entites/showCrew.js';
import ShowAkasItem from './../entites/showAkas.js'
import ShowEpisodes from './../entites/showEpisodes.js'

export default class DataModule {

    getAllShows() {
        if (localStorage.getItem('showDisplay') == null) {
            return fetch(url + '/shows')
                .then((data) => {
                    return data.json()
                }).then((data) => {

                    data.sort(function(e1, e2) {
                        return e2.rating.average - e1.rating.average;
                    })

                    let show = data.slice(0, 50);

                    let showDisplay = show.map(element => {
                        let showObj = new ShowItem(element.image.medium, element.name, element.id);
                        return showObj;
                    })

                    // let showDisplay = [];
                    // for (let i in show) {
                    //     let showObj = new ShowItem(show[i].image.medium, show[i].name, show[i].id);
                    //     showDisplay.push(showObj)
                    // }

                    console.log(showDisplay);
                    let showDisplayStringify = JSON.stringify(showDisplay);

                    localStorage.setItem('showDisplay', showDisplayStringify);
                    // showDisplayStringify[0].print();
                    return showDisplay
                })
        } else {

            let data = localStorage.getItem('showDisplay');
            let showDisplayItem = JSON.parse(data);

            // showDisplayItem[0].print();
            return Promise.resolve(showDisplayItem)
        }
    }
    liveSearch(input) {
        return fetch(url + '/search/shows?q=' + input)
            .then((data) => {
                return data.json()
            }).then((data) => {
                let searchLive10 = data.slice(0, 10)

                let searchLiveData = searchLive10.map(element => {
                        let obj = new ShowSearchItem(element.show.id, element.show.name)
                        return obj
                    })
                    // let searchLiveData = [];
                    // for (let i in searchLive10) {
                    //     let obj = new ShowSearchItem(searchLive10[i].show.id, searchLive10[i].show.name);

                //     searchLiveData.push(obj)
                // }
                return searchLiveData
            })
    }

    searchShow(id) {
        return fetch(url + '/shows/' + id)
            .then((data) => {
                return data.json()
            }).then((data) => {
                let showSPItem = new ShowSPItem(data.name, data.image.original, data.summary)
                return showSPItem
            })
    }
    showSeasonsQuery(id) {

        return fetch(url + '/shows/' + id + '/seasons')
            .then((data) => {
                return data.json()
            }).then((data) => {
                let crewData = data.map(element => {
                        let obj = new ShowSeasons(element.premiereDate, element.endDate);
                        return obj
                    })
                    // for (let i in data) {
                    //     let obj = new ShowSeasons(data[i].premiereDate, data[i].endDate);

                //     crewData.push(obj)
                // }
                return crewData;

            })
    }
    showCastQuery(id) {
        return fetch(url + '/shows/' + id + '/cast')
            .then((data) => {
                return data.json()
            }).then((data) => {
                let dataCast15 = data.slice(0, 15);
                let dataCast = dataCast15.map(element => {
                    let obj = new ShowCast(element.person.name); // da li se ovo radi preko entiteta ili preko stringa
                    return obj
                });

                // for (let i in dataCast15) {
                //     let obj = new ShowCast(dataCast15[i].person.name);
                //     dataCast.push(obj)
                // }
                return dataCast
            })

    }
    showCrewQuery(id) {
        return fetch(url + '/shows/' + id + '/crew')
            .then((data) => {
                return data.json()
            }).then((data) => {
                let dataCrew15 = data.slice(0, 15);
                let imgUrl;

                let dataCrew = dataCrew15.map(element => {
                    let img = element.person.image;
                    if (img == null) {
                        imgUrl = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png'
                    } else {
                        imgUrl = img.medium;
                    }
                    let obj = new ShowCrewItem(element.person.name, element.type, imgUrl, element.person.url)
                    return obj
                })



                // for (let i in dataCrew15) {
                //     let img = dataCrew15[i].person.image;
                //     if (img == null) {
                //         imgUrl = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png'
                //     } else {
                //         imgUrl = img.medium;
                //     }


                //     let obj = new ShowCrewItem(dataCrew15[i].person.name, dataCrew15[i].type, imgUrl, dataCrew15[i].person.url);


                //     dataCrew.push(obj)
                // }

                return dataCrew
            })
    }
    showAKASQuery(id) {
        return fetch(url + '/shows/' + id + '/akas')
            .then((data) => {
                return data.json()
            }).then((data) => {
                let country;
                let akaData = [];

                if (data.length == 0) {
                    let obj = new ShowAkasItem('', "There is no AKA's for this show!");
                    akaData.push(obj)
                } else {

                    akaData = data.map(element => {
                        let countryData = element.country;
                        if (countryData == null) {
                            country = '';
                        } else {
                            country = countryData.name;
                        }
                        let obj = new ShowAkasItem(country, element.name);
                        return obj
                    })


                    // for (let i in data) {
                    //     let countryData = data[i].country;
                    //     if (countryData == null) {
                    //         country = '';
                    //     } else {
                    //         country = countryData.name;
                    //     }
                    //     let obj = new ShowAkasItem(country, data[i].name);
                    //     akaData.push(obj)
                    // }
                }

                return akaData;
            })
    }
    showEpisodesQuery(id) {
        return fetch(url + '/shows/' + id + '/episodes')
            .then((data) => {
                return data.json()
            }).then((data) => {
                let episodesData = data.map(element => {
                    let obj = new ShowEpisodes(element.name, element.season, element.number);
                    return obj
                });



                // for (let i in data) {
                //     let obj = new ShowEpisodes(data[i].name, data[i].season, data[i].number);

                //     episodesData.push(obj)
                // }
                return episodesData
            })
    }
    showTitleQuery(id) {
        return fetch(url + '/shows/' + id)
            .then((data) => {
                return data.json()
            }).then((data) => {
                let titleString = data.name;
                return titleString
            })
    }
}