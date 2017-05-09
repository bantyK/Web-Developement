package com.banty.controllers;

import com.banty.helpers.HttpHelper;
import com.banty.helpers.UrlHelper;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.net.URL;

/**
 * Created by Banty on 22/04/17.
 */
@RestController
public class MainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView showHomePage() {
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }

    @RequestMapping(value = "/detail/{movie_id}", method = RequestMethod.GET)
    public ModelAndView showDetailPage(@PathVariable("movie_id") String movieId) {
        ModelAndView modelAndView = new ModelAndView("details");
        modelAndView.addObject("msg",movieId);
        return modelAndView;
    }

    @RequestMapping(value = "/movie/id/{movie_id}", method = RequestMethod.GET)
    public String showDetailsPage(@PathVariable("movie_id") String movie_id) {
        URL movieDetailURL = UrlHelper.getMovieDetailURL(movie_id);
        String json = new HttpHelper(movieDetailURL).getJSON();
        return json;
    }

    @RequestMapping(value = "/movie/name/{movie_name}", method = RequestMethod.GET)
    public String getMovieJSON(@PathVariable("movie_name") String movieName) {
        movieName = movieName.replace(" ", "%20"); // replace all the blank spaces with %20 in the URL
        URL url = UrlHelper.getMovieListURL(movieName);
        String json = new HttpHelper(url).getJSON();
        System.out.println(json);
        return json;
    }

}
