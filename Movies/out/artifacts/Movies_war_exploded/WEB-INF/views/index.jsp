<%--
  Created by IntelliJ IDEA.
  User: Vuclip
  Date: 22/04/17
  Time: 2:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Movie</title>
    <link rel="stylesheet" href="/static/css/main_page.css"/>
</head>
<body>
<div id="content">
    <div id="progressbar"></div>
    <div id="input-area">
        <h1 id="enter_movie_name_message">Enter the name of the movie you want to search for:</h1>
        <input type="text" id="movie_name_textbox" placeholder="Movie Name" value="Batman"/><br>
        <button id="search_button">Search</button>
    </div>
    <!-- end div input area -->

    <div id="movie_list">

    </div>
    <!-- end div movie list -->

    <script type="text/javascript" src="/static/javascript/jquery.js"></script>
    <script type="text/javascript" src="/static/javascript/main_page.js"></script>
</div>
</body>
</html>
