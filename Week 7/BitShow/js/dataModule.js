var dataModule = (function () {
    function GetAllShows(dataHandler) {
        $.get('http://api.tvmaze.com/shows').done(function (data) {
            data.sort(function (e1, e2) {
                return e2.rating.average - e1.rating.average;
            })

            var show = data.slice(0, 50);

            var showDisplay = [];
            for (var i in show) {
                var showObj = {};
                showObj.imgUrl = show[i].image.medium; /// prepakivanje objekta da sadrzi samo potrebne podatke, UI modul radi isto kao
                showObj.title = show[i].name; //// i do sad samo sa objektom koji je uvek isti i sadrzi potreban info. Mozemo da menjamo server ili api i da uvek UI dobija iste podatke
                showObj.showId = show[i].id;
                showDisplay.push(showObj)
            }


            //         dataHandler(show)
            //     })
            // }

            // function liveSearch(input, liveSearchHandler) {

            //     $.get('http://api.tvmaze.com/search/shows?q=' + input).done(function(data) {
            //         var searchLive10 = data.slice(0, 10)
            //         var searchLiveData = [];
            //         for (var i in searchLive10) {
            //             var obj = {};
            //             obj.id = searchLive10[i].show.id; /// prepakivanje objekta da sadrzi samo potrebne podatke,
            //             obj.title = searchLive10[i].show.name;
            //             searchLiveData.push(obj)
            //         }




            //         liveSearchHandler(searchLiveData)
            //     })
            // }


            /***********************************************************************************
             *********************         show searc for secon page 
             ***********************************************************************************/



            function searchShow(id, renderShowNameImgDetails) {
                $.get('http://api.tvmaze.com/shows/' + id).done(function (data) { // for title, picture and summary

                    var name = data.name;
                    var imgUrl = data.image.original;
                    var summary = data.summary;


                    renderShowNameImgDetails(name, imgUrl, summary)
                })


            }

            function showSeasonsQuery(id, showSeason) {

                $.get('http://api.tvmaze.com/shows/' + id + '/seasons').done(function (data) {

                    var crewData10 = data.slice(0, 15);
                    var crewData = [];
                    for (var i in crewData10) {
                        var obj = {};
                        obj.premiere = crewData10[i].premiereDate;
                        obj.end = crewData10[i].endDate; //prepakivanje podataka
                        crewData.push(obj)
                    }

                    showSeason(crewData);

                })




            }

            function showCastQuery(id, showCast) {
                $.get('http://api.tvmaze.com/shows/' + id + '/cast').done(function (data) {
                    var dataCast15 = data.slice(0, 15);
                    var dataCast = [];

                    for (var i in dataCast15) {
                        var obj = {};
                        obj.name = dataCast15[i].person.name // prepakivanje podataka
                        dataCast.push(obj)
                    }
                    showCast(dataCast);

                })
            }




            /****************************************************************************************************************
             ** **********                                     MORE INFO
             *********************************************************************************************************************/



            function queryMoreInfo(id, crew, akas, episodes, title) {


                /****************************************************************************************************************
                 ** **********                                     CREW
                 *********************************************************************************************************************/
                $.get('http://api.tvmaze.com/shows/' + id + '/crew').done(function (data) {

                    var dataCrew15 = data.slice(0, 15);
                    var dataCrew = [];

                    for (var i in dataCrew15) {
                        var obj = {};
                        obj.urlBio = dataCrew15[i].person.url;
                        var img = dataCrew15[i].person.image;
                        if (img == null) {
                            obj.imgUrl = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png'
                        } else {
                            obj.imgUrl = img.medium;
                        }
                        obj.role = dataCrew15[i].type;
                        obj.name = dataCrew15[i].person.name
                        dataCrew.push(obj)
                    }

                    crew(dataCrew)
                })

                /****************************************************************************************************************
                 ** **********                                     AKAS
                 *********************************************************************************************************************/
                $.get('http://api.tvmaze.com/shows/' + id + '/akas').done(function (data) {
                    var akaData = [];
                    if (data.length == 0) {
                        var obj = {};
                        obj.country = "There is no AKA's for this show!";
                        obj.showName = ''
                        akaData.push(obj)

                    } else {
                        for (var i in data) {
                            var obj = {};
                            var country = data[i].country;
                            obj.showName = data[i].name
                            if (country == null) {
                                obj.country = '';
                            } else {
                                obj.country = country.name;
                            }
                            akaData.push(obj)
                        }
                    }

                    akas(akaData);

                })

                /****************************************************************************************************************
                 ** **********                                     EPISODES
                 *********************************************************************************************************************/
                $.get('http://api.tvmaze.com/shows/' + id + '/episodes').done(function (data) {

                    var episodesData = [];
                    for (var i in data) {
                        var obj = {};
                        obj.epName = data[i].name;
                        obj.season = data[i].season;
                        obj.epNUm = data[i].number;
                        episodesData.push(obj)
                    }
                    episodes(episodesData)
                })
                /****************************************************************************************************************
                 ** **********                                     TITLE
                 *********************************************************************************************************************/
                $.get('http://api.tvmaze.com/shows/' + id).done(function (data) {

                    var titleString = data.name;

                    title(titleString);
                })


            }




            return {
                GetAllShows: GetAllShows,
                liveSearch: liveSearch,
                searchShow: searchShow,
                showSeasonsQuery: showSeasonsQuery,
                showCastQuery: showCastQuery,
                queryMoreInfo: queryMoreInfo

            }
        })();