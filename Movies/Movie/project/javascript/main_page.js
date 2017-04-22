var inputBox = document.getElementById("movie_name_textbox"),
    searchButton = document.getElementById("search_button"),
    xhr = new XMLHttpRequest(),
    response,
    movieName,
    movieNameIdMap = {};

searchButton.addEventListener("click", searchButtonClicked, false);

function searchButtonClicked(event) {
    movieName = inputBox.value;
    var movieListURL = prepareMovieListURL(movieName);
    console.log("Movie list URl : " + movieListURL);
    getMovieListJSON(movieListURL);
}

function prepareMovieListURL(movieName) {
    var url = "https://api.themoviedb.org/3/search/movie?api_key=b33cef0e8f9a26e8857366681a641e25&query=" + movieName;
    return url;
}

function getMovieListJSON(movieListURL) {
    xhr.open('GET', movieListURL, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processResponse, false);
}

function processResponse(event) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        response = JSON.parse(xhr.responseText);
        console.log(response);
        displayMovieList(response);
    }
}
function prepareMovieDetailURL(movieId) {
    var url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=b33cef0e8f9a26e8857366681a641e25&language=en-US";
    return url;
}

function displayMovieList(movieListJSON) {
    var movieNameArray = movieListJSON['results'];
    var html= "";
    if (movieNameArray.length == 0) {
        html += "<h1>No Movie found with this name</h1>";
    } else {
        html +="<ul id='movie-name-list'>";
        movieNameArray.map(function (movieObj, index) {
            movieNameIdMap[movieObj.name] = movieObj.id;
            html += "<li>";
            html += "<a href='" +prepareMovieDetailURL(movieObj.id) +"'>";
            html += movieObj.title + "</a></li>";
        });
        html += "</ul>";
        html += "<hr id='bottom-line'>"
    }
    document.getElementById("movie_list").innerHTML = html;
}