<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Details</title>
    <link rel="stylesheet" href="/static/css/details_page.css"/>
</head>
<body>
<div id="content">
    <div id="title_window">
        <div id="title_window_upper_bar">
            <a id="cast_crew_link" href="#">FULL CAST AND CREW</a>
            <a id="user_review_link" href="#">USER REVIEWS</a>
        </div>

        <div id="movie_title_container">
            <p id="movie_title"><span id="title"></span><span id="release_year"></span>
            </p>

            <div id="title_window_lower">
                <p id="is_adult" class="lower_menu">PG-13</p>
                <p id="duration" class="lower_menu">240</p>
                <p id="genre_list" class="lower_menu">Action, Adventure</p>
                <p id="release_date">2005-06-14</p>
            </div>
        </div>

        <div id="rating-window">
            <img id="rating-star" src="/static/images/star.png">
            <p id="rating">8.3</p>
            <p id="total-rating">/10</p>
            <div style='clear: left'></div>
            <p id="total-reviews">1057</p>
        </div>

        <div class="clear"></div>
    </div>
    <div class="clear"></div>
    <div id="poster-container">
        <img id="poster-image" src="/static/images/batman.jpg">
    </div>
    <div id="description-container">
        <p id="description"></p>
        <p><span class="bold_text">Director : </span><span id="director-name">Christopher Nolan</span></p>
        <p id="writer-name"><span class="bold_text">Writer : </span>Bob Cane, David S Goyer</p>
        <p id="star-name"><span class="bold_text">Stars : </span>Cristian Bale, Michael Cane, Ken Watanabe </p>
        <p id="budget-p"><span class="bold_text">Budget : </span><span id="budget">100000</span></p>
        <p id="production-companies"><span class="bold_text">Production Companies: </span> Warner Bros., Syncopy, DC
            Comics</p>
    </div>
</div>
<script type="text/javascript" src="/static/javascript/details_page.js"></script>
</body>
</html>
