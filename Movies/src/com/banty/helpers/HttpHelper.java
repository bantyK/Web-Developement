package com.banty.helpers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by Banty on 22/04/17.
 */
public class HttpHelper {
    URL url;

    public HttpHelper(URL url) {
        this.url = url;
    }

    public String getJSON() {
        StringBuilder builder = new StringBuilder();
        try {
            HttpURLConnection connection = (HttpURLConnection) this.url.openConnection();
            connection.setRequestMethod("GET");
            int responseCode = connection.getResponseCode();
            if(responseCode == HttpURLConnection.HTTP_OK){
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = "";
                while((line= bufferedReader.readLine()) != null){
                    builder.append(line);
                }
                bufferedReader.close();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return builder.toString();
    }
}
