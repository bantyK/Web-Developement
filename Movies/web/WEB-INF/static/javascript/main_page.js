var inputBox = document.getElementById("movie_name_textbox"),
    searchButton = document.getElementById("search_button"),
    xhr = new XMLHttpRequest(),
    response,
    movieName,
    movieNameIdMap = {};

searchButton.addEventListener("click", searchButtonClicked, false);

function searchButtonClicked(event) {
    movieName = inputBox.value;
    if (movieName == "") {
        alert("Enter the name of movie");
    } else {
        var movieListURL = prepareMovieListURL(movieName);
        // console.log("Movie list URl : " + movieListURL);
        getMovieListJSON(movieListURL);
    }
}

function prepareMovieListURL(movieName) {
    var url = "/movie/name/" + movieName;
    return url;
}

function getMovieListJSON(movieListURL) {
    console.log(movieListURL);
    xhr.open('GET', movieListURL, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processResponse, false);
}


function processResponse(event) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // console.log(xhr.responseText);
        response = JSON.parse(xhr.responseText);
        displayMovieList(response);
    }
}
function prepareMovieDetailURL(movieId) {
    url = "/detail/" + movieId;
    return url;
}

function prepareHTMLForMovieList(html, movieNameArray) {
    html += "<ul id='movie-name-list'>";
    movieNameArray.map(function (movieObj, index) {
        html += "<li>";
        html += "<a href='" + prepareMovieDetailURL(movieObj.id) + "'>";
        html += movieObj.title + "</a></li>";
    });
    html += "</ul>";
    html += "<hr id='bottom-line'>";
    return html;
}

function displayMovieList(movieListJSON) {
    var movieNameArray = movieListJSON['results'];
    var html = "";
    if (movieNameArray.length == 0) {
        html += "<h1>No Movie found with this name</h1>";
    } else {
        html = prepareHTMLForMovieList(html, movieNameArray);
    }
    document.getElementById("movie_list").innerHTML = html;
}
localStorage.setItem("ids", movieNameIdMap);
