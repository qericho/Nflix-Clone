import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Movies = ({movie, key}) => {
    
    const [like, setLike] = useState(false);

  return (
        <div key={key} className="w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] inline-block cursor-pointer relative p-2">
            <img className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} 
              alt={movie?.title} 
            />
            {/* Overlay */}
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100">
              <p className="whitespace-normal font-bold text-white text-xs md:text-sm text-center">
                {movie?.title}
              </p>
              {like ? (
                <FaHeart size={20} className="absolute top-3 left-3 text-gray-300" />
              ) : (
                <FaRegHeart size={20} className="absolute top-3 left-3 text-gray-300" />
              )}
            </div>
      </div>
      
  )
}

export default Movies
