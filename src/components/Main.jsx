import { useEffect, useState } from "react";
import requests from "../request";
import axios from "axios";

const Main = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(requests.requestPopular)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.error(err));
    }, []);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    const truncateString = (str, num) => {
        if (str && str.length > num) {
            return str.slice(0, num) + '...';
        }
        return str || ''; 
    };

    return (
        <div className="w-full h-[550px] text-white">
            {/* Movie Img */}
            <div className="w-full h-full">
                <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-l to-black/80 "></div>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Movie Info */}
            <div className="w-full absolute top-[35%] md:top-[25%] left-0 px-5 md:px-20">
                <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
                <div className="space-x-2 my-4">
                    <button className="px-6 py-2 border border-gray-200 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-sm cursor-pointer">
                        Play
                    </button>
                    <button className="px-6 py-2 border border-gray-200 text-white font-medium rounded-sm cursor-pointer">
                        Watch Later
                    </button>
                </div>
                <p className="text-gray-200"><small>{movie?.release_date}</small></p>
                <p className="w-full md:w-[50%] xl:w-[60%]">{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    );
};

export default Main;
