import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }
    useEffect(() => {
       console.log('Tanu');
        fetchData();
    }, [])

    console.log('blabla',movie);

    function truncate(string, n) {
        return (string && string.length > n) ? string.substr(0, n - 1) + '...' : string;
    }


    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: movie ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` : "",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    { movie ? movie.name : null }
                </h1>
                <div className="banner_button">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie ? truncate(movie.overview, 150) : ''}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;