// import axios from 'axios'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MovieCard from './MovieCard'
import { getallmovies } from './../../js/actions/movieactions';

const ListMovie = () => {
    // const [movies, setMovies] = useState([])
    const dispatch=useDispatch()
    const moviesr=useSelector((state)=>state.moviereducer.movielist)
    useEffect(() => {
        dispatch(getallmovies())
    //    const getmovie=async()=>{
    //     try {
    //         const res= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    //        console.log(res) 
    //        setMovies(res.data.results)
    //     } catch (error) {
            
    //     }
    //    }
    //    getmovie()
      
    
      
    }, [dispatch])

    
  return (
    <div  style={{
      display: "flex",justifyContent :'space-between',
      flexWrap: "wrap",
    }}>{moviesr.map((el,i)=><MovieCard key={i} movie={el}/>)}</div>
  )
}

export default ListMovie