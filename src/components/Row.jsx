import axios from "axios";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { useEffect, useState } from "react"
import Movies from "./Movies";

const Row = ({title, fetchUrl, rowId}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results);
        })
    }, [fetchUrl])

    const sliderLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      
      const sliderRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
      };
      

  return (
    <div>
        <h1 className="text-white md:text-xl font-bold p-4">{title}</h1>
        <div className="relative flex items-center group">
            <IoChevronForward onClick={sliderRight}
             className="size-[30px] md:size-[40px] text-black opacity-50 hidden group-hover:block
             hover:opacity-100 bg-white rounded-full absolute right-0 z-10 cursor-pointer"/>
            <div id={'slider' + rowId} className="w-full h-full scrollbar-hide overflow-x-scroll whitespace-nowrap scroll-smooth relative ">
                {movies.map((movie, id) => (
                    <Movies movie={movie} key={id} />
                ))}
            </div>
            <IoChevronBack onClick={sliderLeft}
              className="size-[30px] md:size-[40px] text-black opacity-50 hidden group-hover:block
            hover:opacity-100 bg-white rounded-full absolute left-0-0 z-10 cursor-pointer"/>
        </div>
   
    </div>
  )
}

export default Row
