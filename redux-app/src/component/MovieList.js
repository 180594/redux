import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"


const MovieList =()=>{
    const List = useSelector(state=>state.Movies.movies)
    return(
<div>
    {List.map((item,index =>{
     return(
        <MovieCard movie={item} key={index}/>
     )
    }))}
</div>
    )
}
export default MovieList