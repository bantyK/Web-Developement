var url = window.location.href,
    urlParams = url.split("/"),
    movieId = urlParams[urlParams.length - 1],
    xhr = new XMLHttpRequest();

xhr.open("GET","/movie/id/"+movieId,true);
xhr.send();
xhr.addEventListener("readystatechange", processResponse, false);

function getReleaseDate(release_date) {
    return release_date;
}
function populateUI(response) {
    document.getElementById("budget").innerHTML = response.budget;
    document.getElementById("title").innerHTML = response.title;
    document.getElementById("release_year").innerHTML = "(" + getReleaseDate(response.release_date) + ")";
    document.getElementById("duration").innerHTML = response.runtime;
    document.getElementById("description").innerHTML = response.overview;
    document.getElementById("release_date").innerHTML = response.release_date;
}
function processResponse(event){
    if(xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parse(xhr.responseText);
        populateUI(response);
    }
}