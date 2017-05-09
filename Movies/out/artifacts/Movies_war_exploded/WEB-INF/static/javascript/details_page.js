var url = window.location.href,
    urlParams = url.split("/"),
    movieId = urlParams[urlParams.length - 1],
    xhr = new XMLHttpRequest();

xhr.open("GET","/movie/id/"+movieId,true);
xhr.send();
xhr.addEventListener("readystatechange", processResponse, false);

function processResponse(event){
    if(xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parse(xhr.responseText);
        console.log(response.budget);
    }
}