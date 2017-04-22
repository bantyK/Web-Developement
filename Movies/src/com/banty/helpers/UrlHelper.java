package com.banty.helpers;

import com.banty.constants.HttpConstants;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by Banty on 22/04/17.
 * This class will take care of forming different URLs for HTTP connection
 */
public class UrlHelper {

    public static URL getMovieListURL(String movieName) {
        String url = HttpConstants.BASE_URL + "/";
        url += HttpConstants.PATH_SEARCH + "/";
        url += HttpConstants.PATH_MOVIE;
        url += "?api_key=" + HttpConstants.API_KEY;
        url += "&query=" + movieName;
        try {
            return new URL(url);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static URL getMovieDetailURL(String movie_id) {
        //https://api.themoviedb.org/3/movie/123?api_key=b33cef0e8f9a26e8857366681a641e25&language=en-US
        String url = HttpConstants.BASE_URL + "/";
        url += HttpConstants.PATH_MOVIE + "/";
        url += movie_id + "?";
        url += "api_key="+HttpConstants.API_KEY + "&";
        url += "language=en-US";

        try {
            return new URL(url);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;

    }
}
